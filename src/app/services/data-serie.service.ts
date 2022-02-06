import { Injectable } from '@angular/core';
import { Serie } from './interfaces/serie';
import { Subject } from 'rxjs';
import { tap, map, switchMap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CoupleGenreCompteur } from './interfaces/genre';
import { GenreService } from './genre.service';

interface serieFetchedModel {
	dateS: string;
	genre1: string;
	genre2: string;
	dateF?: number;
	nbEpisode: number;
	nbSaison: number;
	imageURL?: string;
	nom: string;
	userID: string;
}

interface serieFetchedModel2 {
	id: string;
	note: number;
	commentaire?: string;
	vuEntierement: boolean;
}

interface nonRecModel {
	id: string;
}

@Injectable({
	providedIn: 'root'
})
export class DataSerieService {
	public allSerieChanged = new Subject<Serie[]>();
	public mySerieChanged = new Subject<Serie[]>();
	public serieNonVuChanged = new Subject<Serie[]>();
	public recSerieChanged = new Subject<Serie[]>();
	public genresChanged = new Subject<CoupleGenreCompteur[]>();

	private GeneratedID: string;

	public allSerie: Serie[] = [];
	public mySerie: Serie[] = [];
	public serieNonVu: Serie[] = [];
	public recSerie: Serie[] = [];
	public genres: CoupleGenreCompteur[] = [];
	public nonRecSerie: string[] = [];
	private userID: string;

	private resultOfFetchMySerie: serieFetchedModel2[] = [];

	constructor(private http: HttpClient, private genreService: GenreService) {}

	//ajoute la série s dans la liste de tous les séries de la base de données
	//appelle la fonction addInMySérie
	addInAllSerie(s: Serie, userID: string) {
		var t: Serie = {
			...s,
			id: null,
			commentaire: null,
			note: null,
			vuEntierement: null,
			userID: userID
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/series.json', t)
			.pipe(
				switchMap((resData) => {
					this.GeneratedID = resData.name;
					this.addInMySerie({ ...s, id: this.GeneratedID }, userID);
					return this.allSerie;
				}),
				take(1),
				tap((serie) => {
					t.id = this.GeneratedID;
					this.allSerie.push(t);
					this.allSerieChanged.next(this.allSerie);
				})
			)
			.subscribe();
	}

	//ajoute la série s dans ma liste de série dans la base de données
	addInMySerie(s: Serie, userID: string) {
		this.mySerie.push({ ...s });
		this.mySerieChanged.next(this.mySerie);
		var t: Serie = {
			...s,
			dateS: null,
			genre1: null,
			genre2: null,
			imageURL: null,
			nom: null,
			userID: null,
			nbEpisode: null,
			nbSaison: null,
			dateF: null
		};
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + userID + '/series.json', t)
			.pipe(
				tap((val) => {
					var serie = this.serieNonVu.find((s) => {
						return t.id == s.id;
					});
					var i = this.serieNonVu.indexOf(serie);
					this.serieNonVu.splice(i, 1);
					this.serieNonVuChanged.next(this.serieNonVu);
				})
			)
			.subscribe();
	}

	//récupère sur la base de données la liste de toutes les séries
	fetchAllSerie() {
		return this.http
			.get<{ [key: string]: serieFetchedModel }>('https://bestfsjv.firebaseio.com/series.json')
			.pipe(
				map((resData) => {
					var result: Serie[] = [];
					for (const key in resData) {
						const s: Serie = {
							id: key,
							dateS: +resData[key].dateS,
							nom: resData[key].nom,
							genre1: resData[key].genre1,
							genre2: resData[key].genre2,
							imageURL: resData[key].imageURL,
							userID: resData[key].userID,
							nbEpisode: resData[key].nbEpisode,
							nbSaison: resData[key].nbSaison
						};
						if (!isNaN(resData[key].dateF)) {
							s.dateF = resData[key].dateF;
						}
						result.push(s);
					}
					return result;
				}),
				tap((result) => {
					this.allSerie = result;
					this.allSerieChanged.next(this.allSerie);
				})
			)
			.subscribe();
	}

	//récupère sur la base de données la liste de mes films
	fetchMySerie(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: serieFetchedModel2 }>('https://bestfsjv.firebaseio.com/' + userID + '/series.json')
			.pipe(
				map((resData) => {
					var result: serieFetchedModel2[] = [];
					for (const key in resData) {
						const s: serieFetchedModel2 = {
							id: resData[key].id,
							note: resData[key].note,
							commentaire: resData[key].commentaire,
							vuEntierement: resData[key].vuEntierement
						};
						result.push(s);
					}
					return result;
				}),
				tap((result) => {
					this.resultOfFetchMySerie = result;
					this.updateMySerie();
					this.updateSerieNonVu();
					this.updateGenres();
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
		this.mySerie.forEach((serie) => {
			result.forEach((couple) => {
				if (serie.genre1 == couple.genre || serie.genre2 == couple.genre) {
					couple.compteur += serie.note;
				}
			});
		});
		this.genres = result;
		this.genresChanged.next(this.genres);
	}

	// rajoute une série a ma liste de série non recommandés une nouvelle série dans la base de données
	delInRecSerie(s: Serie) {
		var id: string = s.id;
		return this.http
			.post<{ name: string }>('https://bestfsjv.firebaseio.com/' + this.userID + '/nonRec/series.json', { id })
			.subscribe();
	}

	//récupère la liste des séries non recommandés
	fetchNonRec(userID: string) {
		this.userID = userID;
		return this.http
			.get<{ [key: string]: nonRecModel }>('https://bestfsjv.firebaseio.com/' + userID + '/nonRec/series.json')
			.pipe(
				map((resData) => {
					var result: string[] = [];
					for (const key in resData) {
						result.push(resData[key].id);
					}
					return result;
				}),
				tap((result) => {
					this.nonRecSerie = result;
				})
			)
			.subscribe();
	}

	// recherche une série par id dans la liste de toutes séries
	getInAllSerie(id: string) {
		return {
			...this.allSerie.find((serie) => {
				return '' + serie.id === id;
			})
		};
	}

	// recherche une série par id dans la liste de mes série
	getInMySerie(id: string) {
		return {
			...this.mySerie.find((serie) => {
				return '' + serie.id === id;
			})
		};
	}

	//crée un lien entre mes série (id) et toute les série et màj de mes série
	updateMySerie() {
		this.mySerie = [];
		this.resultOfFetchMySerie.forEach((result) => {
			var serie: Serie = this.getInAllSerie(result.id);
			serie.note = result.note;
			serie.commentaire = result.commentaire;
			serie.vuEntierement = result.vuEntierement;
			this.mySerie.push(serie);
		});
		this.mySerieChanged.next(this.mySerie);
	}

	//déduis la liste des séries non vu grâce au id des de mes séries
	updateSerieNonVu() {
		var result: Serie[] = { ...this.allSerie };
		//transformation en tableau de serie
		result = Object.keys(result).map((i) => result[i]);

		result = result.filter((f) => {
			var serieTrouve: Serie;
			this.mySerie.forEach((monSerie) => {
				if (monSerie.id == f.id) {
					serieTrouve = monSerie;
				}
			});
			if (serieTrouve != null) {
				return false;
			}
			return true;
		});
		this.serieNonVu = result;
		console.log(this.serieNonVu);
		this.serieNonVuChanged.next(this.serieNonVu);
	}
}
