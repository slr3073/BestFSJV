import { Injectable } from '@angular/core';
import { Film } from './interfaces/film';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap, take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GenreService } from './genre.service';
import { CoupleGenreCompteur } from './interfaces/genre';
import { DataSerieService } from './data-serie.service';
import { DataJeuVideoService } from './data-jeu-video.service';

interface filmFetchedModel {
	dateS: string;
	genre1: string;
	genre2: string;
	imageURL?: string;
	nom: string;
	userID: string;
}

interface filmFetchedModel2 {
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
export class DataFilmService {
	public allFilmChanged = new Subject<Film[]>();
	public myFilmChanged = new Subject<Film[]>();
	public recFilmChanged = new Subject<Film[]>();
	public filmNonVuChanged = new Subject<Film[]>();
	public genresChanged = new Subject<CoupleGenreCompteur[]>();

	private GeneratedID: string;

	public allFilm: Film[] = [];
	public myFilm: Film[] = [];
	public filmNonVu: Film[] = [];
	public recFilm: Film[] = [];
	public nonRecFilm: String[] = [];
	public genres: CoupleGenreCompteur[];

	private resultOfFetchMyFilm: filmFetchedModel2[] = [];

	private userID: string;

	constructor(private http: HttpClient, private genreService: GenreService) {}

	//ajoute le film f dans la liste de tous les films de la base de données
	//appelle la fonction addInMyFilms
	addInAllFilm(f: Film, userID: string) {
		var t: Film = {
			...f,
			id: null,
			commentaire: null,
			note: null,
			userID: userID
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/films.json', t)
			.pipe(
				switchMap((resData) => {
					this.GeneratedID = resData.name;
					this.addInMyFilm({ ...f, id: this.GeneratedID }, userID);
					return this.allFilm;
				}),
				take(1),
				tap(() => {
					t.id = this.GeneratedID;
					this.allFilm.push(t);
					this.allFilmChanged.next(this.allFilm);
				})
			)
			.subscribe();
	}

	//ajoute le jeu video jv dans ma liste de jeux video dans la base de données
	addInMyFilm(f: Film, userID: string) {
		this.myFilm.push({ ...f });
		this.myFilmChanged.next(this.myFilm);
		var t: Film = {
			...f,
			dateS: null,
			genre1: null,
			genre2: null,
			imageURL: null,
			nom: null,
			userID: null
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + userID + '/films.json', t)
			.pipe(
				tap((val) => {
					var film = this.filmNonVu.find((f) => {
						return t.id == f.id;
					});
					var i = this.filmNonVu.indexOf(film);
					this.filmNonVu.splice(i, 1);
					this.filmNonVuChanged.next(this.filmNonVu);
				})
			)
			.subscribe();
	}

	//récupère la liste de tous les films depuis la base de données
	fetchAllFilm() {
		return this.http
			.get<{ [key: string]: filmFetchedModel }>('https://bestfsjv.firebaseio.com/films.json')
			.pipe(
				map((resData) => {
					var result: Film[] = [];
					for (const key in resData) {
						const f: Film = {
							id: key,
							dateS: +resData[key].dateS,
							nom: resData[key].nom,
							genre1: resData[key].genre1,
							genre2: resData[key].genre2,
							imageURL: resData[key].imageURL,
							userID: resData[key].userID
						};
						result.push(f);
					}
					return result;
				}),
				tap((result) => {
					this.allFilm = result;
					this.allFilmChanged.next(this.allFilm);
				})
			)
			.subscribe();
	}

	//récupère la liste de mes films ajoutés
	fetchMyFilm(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: filmFetchedModel2 }>('https://bestfsjv.firebaseio.com/' + userID + '/films.json')
			.pipe(
				map((resData) => {
					var result: filmFetchedModel2[] = [];
					for (const key in resData) {
						const f: filmFetchedModel2 = {
							id: resData[key].id,
							note: resData[key].note,
							commentaire: resData[key].commentaire
						};
						result.push(f);
					}
					return result;
				}),
				tap((result) => {
					this.resultOfFetchMyFilm = result;
					this.updateMyFilm();
					this.updateFilmNonVu();
					this.updateGenres();
					console.log(this.myFilm);
				})
			)
			.subscribe();
	}

	//récupère la liste des films que je ne souhaite plus voir dans mes recommandations
	fetchNonRec(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: nonRecModel }>('https://bestfsjv.firebaseio.com/' + userID + '/nonRec/films.json')
			.pipe(
				map((resData) => {
					var result: string[] = [];
					for (const key in resData) {
						result.push(resData[key].id);
					}
					return result;
				}),
				tap((result) => {
					this.nonRecFilm = result;
				})
			)
			.subscribe();
	}

	//ajoute sur la base de données un film que je ne souhaite plus voir dans mes recommandations
	delInRecFilm(f: Film) {
		var id: string = f.id;
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + this.userID + '/nonRec/films.json', { id })
			.subscribe();
	}

	//recherche par id dans la liste de tous les films
	getInAllFilm(id: string) {
		return {
			...this.allFilm.find((film) => {
				return film.id == id;
			})
		};
	}

	//recherche par id dans la liste de mes films
	getInMyFilm(id: string) {
		return {
			...this.myFilm.find((film) => {
				return film.id === id;
			})
		};
	}

	//permet de màj un tableaux de Couple Genre/compteur afin de savoir mes genres de films favoris
	updateGenres() {
		var result: CoupleGenreCompteur[] = [];
		this.genreService.genre.forEach((genre) => {
			var t: CoupleGenreCompteur = { genre: genre, compteur: 0 };
			result.push(t);
		});
		this.myFilm.forEach((film) => {
			result.forEach((couple) => {
				if (film.genre1 == couple.genre || film.genre2 == couple.genre) {
					couple.compteur += film.note;
				}
			});
		});
		this.genres = result;
		this.genresChanged.next(this.genres);
	}

	//permet de faire le lien entre la liste mes films et la liste de film globale
	updateMyFilm() {
		this.myFilm = [];
		this.resultOfFetchMyFilm.forEach((result) => {
			var film: Film = this.getInAllFilm(result.id);
			film.note = result.note;
			film.commentaire = result.commentaire;
			this.myFilm.push(film);
		});
		this.myFilmChanged.next(this.myFilm);
	}

	//détermine grâce aux id des mes films les films que je n'ai pas vu
	updateFilmNonVu() {
		var result: Film[] = { ...this.allFilm };
		//transformation en tableau de film
		result = Object.keys(result).map((i) => result[i]);

		result = result.filter((f) => {
			var filmTrouve: Film;
			this.myFilm.forEach((monFilm) => {
				if (monFilm.id == f.id) {
					filmTrouve = monFilm;
				}
			});
			if (filmTrouve != null) {
				return false;
			}
			return true;
		});
		this.filmNonVu = result;
		this.filmNonVuChanged.next(this.filmNonVu);
	}
}
