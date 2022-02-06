import { Injectable } from '@angular/core';
import { JeuVideo } from './interfaces/jeu-video';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap, map, switchMap, take } from 'rxjs/operators';
import { CoupleGenreCompteur } from './interfaces/genre';
import { GenreService } from './genre.service';
import { DataFilmService } from './data-film.service';
import { DataSerieService } from './data-serie.service';
import { Film } from './interfaces/film';
import { Serie } from './interfaces/serie';

interface JeuVideoFetchedModel {
	dateS: string;
	genre1: string;
	genre2: string;
	imageURL?: string;
	nom: string;
	developpeur: string;
	editeur: string;
	plateformes: string[];
	userID: string;
}

interface JeuVideoFetchedModel2 {
	id: string;
	note: number;
	commentaire?: string;
}

interface nonRecModel {
	id: string;
}

@Injectable({
	providedIn: 'root'
})
export class DataJeuVideoService {
	public allJeuVideoChanged = new Subject<JeuVideo[]>();
	public myJeuVideoChanged = new Subject<JeuVideo[]>();
	public recJeuVideoChanged = new Subject<JeuVideo[]>();
	public jeuVideoNonJoueChanged = new Subject<JeuVideo[]>();
	public genresChanged = new Subject<CoupleGenreCompteur[]>();

	private GeneratedID: string;

	public allJeuVideo: JeuVideo[] = [];
	public myJeuVideo: JeuVideo[] = [];
	public recJeuVideo: JeuVideo[] = [];
	public jeuVideoNonJoue: JeuVideo[] = [];
	public genres: CoupleGenreCompteur[];
	public nonRecJeuVideo: String[] = [];
	private userID: string;

	private resultOffFetchMyJeuVideo: JeuVideoFetchedModel2[] = [];

	constructor(
		private http: HttpClient,
		private genreService: GenreService,
		private filmService: DataFilmService,
		private serieService: DataSerieService
	) {}

	//ajoute le jeu video jv dans la liste de tous les jeux video de la base de données
	//appelle la fonction addInMyJeuVideo
	addInAllJeuVideo(jv: JeuVideo, userID: string) {
		var t: JeuVideo = {
			...jv,
			id: null,
			commentaire: null,
			note: null,
			userID: userID
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/jeuxVideo.json', t)
			.pipe(
				switchMap((resData) => {
					this.GeneratedID = resData.name;
					this.addInMyJeuVideo({ ...jv, id: this.GeneratedID }, userID);
					return this.allJeuVideo;
				}),
				take(1),
				tap((film) => {
					t.id = this.GeneratedID;
					this.allJeuVideo.push(t);
					this.allJeuVideoChanged.next(this.allJeuVideo);
				})
			)
			.subscribe();
	}

	//ajoute le jeu video jv dans ma liste de jeux video dans la base de données
	addInMyJeuVideo(jv: JeuVideo, userID: string) {
		this.myJeuVideo.push({ ...jv });
		this.myJeuVideoChanged.next(this.myJeuVideo);
		var t: JeuVideo = {
			...jv,
			dateS: null,
			genre1: null,
			genre2: null,
			imageURL: null,
			nom: null,
			userID: null,
			developpeur: null,
			editeur: null,
			plateformes: null
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + userID + '/jeuxVideo.json', t)
			.pipe(
				tap((val) => {
					var jeuVideo = this.jeuVideoNonJoue.find((jv) => {
						return t.id == jv.id;
					});
					var i = this.jeuVideoNonJoue.indexOf(jeuVideo);
					this.jeuVideoNonJoue.splice(i, 1);
					this.jeuVideoNonJoueChanged.next(this.jeuVideoNonJoue);
				})
			)
			.subscribe();
	}

	//récupère la liste de tous les jeux vidéo depuis la base de données
	fetchAllJeuVideo() {
		return this.http
			.get<{ [key: string]: JeuVideoFetchedModel }>('https://bestfsjv.firebaseio.com/jeuxVideo.json')
			.pipe(
				map((resData) => {
					var result: JeuVideo[] = [];
					for (const key in resData) {
						const jv: JeuVideo = {
							id: key,
							dateS: +resData[key].dateS,
							nom: resData[key].nom,
							genre1: resData[key].genre1,
							genre2: resData[key].genre2,
							developpeur: resData[key].developpeur,
							editeur: resData[key].editeur,
							plateformes: resData[key].plateformes,
							imageURL: resData[key].imageURL,
							userID: resData[key].userID
						};
						result.push(jv);
					}
					return result;
				}),
				tap((result) => {
					this.allJeuVideo = result;
					this.allJeuVideoChanged.next(this.allJeuVideo);
				})
			)
			.subscribe();
	}

	//récupère mes jeux vidéo depuis la base de données
	fetchMyJeuVideo(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: JeuVideoFetchedModel2 }>(
				'https://bestfsjv.firebaseio.com/' + userID + '/jeuxVideo.json'
			)
			.pipe(
				map((resData) => {
					var result: JeuVideoFetchedModel2[] = [];
					for (const key in resData) {
						const f: JeuVideoFetchedModel2 = {
							id: resData[key].id,
							note: resData[key].note,
							commentaire: resData[key].commentaire
						};
						result.push(f);
					}
					return result;
				}),
				tap((result) => {
					this.resultOffFetchMyJeuVideo = result;
					this.updateMyJeuVideo();
					this.updateJeuVideoNonVu();
					this.updateGenres();
					this.updateAllGenres();
				})
			)
			.subscribe();
	}

	//permet de déterminer un tableau de couple genre/compteur afin de savoir quel genre de jeu vidéo je préfère
	updateGenres() {
		var result: CoupleGenreCompteur[] = [];
		this.genreService.genre.forEach((genre) => {
			var t: CoupleGenreCompteur = { genre: genre, compteur: 0 };
			result.push(t);
		});
		this.myJeuVideo.forEach((jv) => {
			result.forEach((couple) => {
				if (jv.genre1 == couple.genre || jv.genre2 == couple.genre) {
					couple.compteur += jv.note;
				}
			});
		});
		this.genres = result;
	}

	// màj tous les genres film/série/jeuxVideo afin de merge le tableau couple genre/compteur afin de recommander des médias que je devrai aimer
	updateAllGenres() {
		var genres: CoupleGenreCompteur[] = [ ...this.genres ];
		for (let i = 0; i < genres.length; i++) {
			genres[i].compteur += this.serieService.genres[i].compteur + this.filmService.genres[i].compteur;
		}
		genres = genres.sort((a, b) => b.compteur - a.compteur);

		var recFilm: Film[] = [];
		var nonRec: String[] = this.filmService.nonRecFilm;

		this.filmService.filmNonVu.forEach((film) => {
			if (
				film.genre1 == genres[0].genre ||
				film.genre2 == genres[0].genre ||
				film.genre1 == genres[1].genre ||
				film.genre2 == genres[1].genre
			) {
				var flag: boolean = true;
				nonRec.forEach((id) => {
					if (film.id == id) {
						flag = false;
					}
				});
				if (flag) {
					recFilm.push(film);
				}
			}
		});

		var recSerie: Serie[] = [];
		var nonRec: String[] = this.serieService.nonRecSerie;

		this.serieService.serieNonVu.forEach((serie) => {
			if (
				serie.genre1 == genres[0].genre ||
				serie.genre2 == genres[0].genre ||
				serie.genre1 == genres[1].genre ||
				serie.genre2 == genres[1].genre
			) {
				var flag: boolean = true;
				nonRec.forEach((id) => {
					if (serie.id == id) {
						flag = false;
					}
				});
				if (flag) {
					recSerie.push(serie);
				}
			}
		});

		var recJV: JeuVideo[] = [];
		var nonRec: String[] = this.nonRecJeuVideo;

		this.jeuVideoNonJoue.forEach((jv) => {
			if (
				jv.genre1 == genres[0].genre ||
				jv.genre2 == genres[0].genre ||
				jv.genre1 == genres[1].genre ||
				jv.genre2 == genres[1].genre
			) {
				var flag: boolean = true;
				nonRec.forEach((id) => {
					if (jv.id == id) {
						flag = false;
					}
				});
				if (flag) {
					recJV.push(jv);
				}
			}
		});
		this.filmService.recFilm = recFilm;
		this.recJeuVideo = recJV;
		this.serieService.recSerie = recSerie;

		this.filmService.recFilmChanged.next(recFilm);
		this.serieService.recSerieChanged.next(recSerie);
		this.recJeuVideoChanged.next(recJV);
	}

	//ajoute à la base de données un jeu vidéo que je ne souhaite plus voir dans mes recommandations
	delInRecJeuVideo(jv: JeuVideo) {
		var id: string = jv.id;
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + this.userID + '/nonRec/jeuxVideo.json', { id })
			.subscribe();
	}

	//récupère depuis la base de données la liste des jeux vidéo que je souhaite pas voir dans mes recommandations
	fetchNonRec(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: nonRecModel }>('https://bestfsjv.firebaseio.com/' + userID + '/nonRec/jeuxVideo.json')
			.pipe(
				map((resData) => {
					var result: string[] = [];
					for (const key in resData) {
						result.push(resData[key].id);
					}
					return result;
				}),
				tap((result) => {
					this.nonRecJeuVideo = result;
				})
			)
			.subscribe();
	}

	//recherche par id dans la liste de jeux video globale
	getInAllJeuVideo(id: string) {
		return {
			...this.allJeuVideo.find((jv) => {
				return '' + jv.id === id;
			})
		};
	}

	//recherche par id dans ma liste de jeux video
	getInMyJeuVideo(id: string) {
		return {
			...this.myJeuVideo.find((jv) => {
				return '' + jv.id === id;
			})
		};
	}

	//relie grâce à l'id de mes jeux vidéo le jeu vidéo correspondant dans tous les jeux vidéo
	updateMyJeuVideo() {
		this.myJeuVideo = [];
		this.resultOffFetchMyJeuVideo.forEach((result) => {
			var jeuVideo: JeuVideo = this.getInAllJeuVideo(result.id);
			jeuVideo.note = result.note;
			jeuVideo.commentaire = result.commentaire;
			this.myJeuVideo.push(jeuVideo);
		});
		this.myJeuVideoChanged.next(this.myJeuVideo);
	}

	//calcule grâce aux id les jeux aux quels je n'ai pas joué
	updateJeuVideoNonVu() {
		var result: JeuVideo[] = { ...this.allJeuVideo };
		//transformation en tableau de jeu video
		result = Object.keys(result).map((i) => result[i]);

		result = result.filter((f) => {
			var jeuVideoTrouve: JeuVideo;
			this.myJeuVideo.forEach((monJeuVideo) => {
				if (monJeuVideo.id == f.id) {
					jeuVideoTrouve = monJeuVideo;
				}
			});
			if (jeuVideoTrouve != null) {
				return false;
			}
			return true;
		});
		this.jeuVideoNonJoue = result;
		this.jeuVideoNonJoueChanged.next(this.jeuVideoNonJoue);
	}
}
