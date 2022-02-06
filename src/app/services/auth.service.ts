import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/user';
import { map, tap } from 'rxjs/operators';
import { DataFilmService } from './data-film.service';
import { DataJeuVideoService } from './data-jeu-video.service';
import { DataSerieService } from './data-serie.service';

interface authResponseData {
	kind: string;
	idToken: string;
	email: string;
	refresh: string;
	localId: string;
	expiresIn: string;
	registered?: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private logged: boolean;
	private _user = new BehaviorSubject<User>(null);
	private _userId;

	constructor(
		private http: HttpClient,
		private filmService: DataFilmService,
		private jeuVideoService: DataJeuVideoService,
		private serieService: DataSerieService
	) {}

	//retourne l'état de connexion de l'utilisateur
	get estConnecte() {
		return this.logged;
	}

	//retourne l'userID
	get userId() {
		return this._userId;
	}

	//demande d'inscription sur le serveur mail/mdp
	sinscrire(email: string, mdp: string) {
		return this.http
			.post<
				authResponseData
			>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDV3sw4kazx97GAUg9jLoWCxae_OUAmeng', {
				email: email,
				password: mdp,
				returnSecureToken: true
			})
			.pipe(
				tap((resData) => {
					const expirationTime = new Date(new Date().getTime() + +resData.expiresIn * 1000);
					this._userId = resData.localId;
					this._user.next(new User(resData.localId, resData.email, resData.idToken, expirationTime));
				})
			);
	}

	//demande de connexion sur le serveur mail/mdp
	connexion(email: string, mdp: string) {
		return this.http
			.post<
				authResponseData
			>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDV3sw4kazx97GAUg9jLoWCxae_OUAmeng',
				{
					email: email,
					password: mdp,
					returnSecureToken: true
				}
			)
			.pipe(
				tap((resData) => {
					const expirationTime = new Date(new Date().getTime() + +resData.expiresIn * 1000);
					this._userId = resData.localId;
					this._user.next(new User(resData.localId, resData.email, resData.idToken, expirationTime));
				})
			);
	}

	//déclanché après une connexion
	//Récupère toutes les données nécéssaire sur le serveur
	loggin() {
		this.filmService.fetchAllFilm();
		this.filmService.fetchMyFilm(this.userId);

		this.filmService.fetchNonRec(this.userId);
		this.serieService.fetchNonRec(this.userId);
		this.jeuVideoService.fetchNonRec(this.userId);

		this.serieService.fetchAllSerie();
		this.serieService.fetchMySerie(this.userId);

		this.jeuVideoService.fetchAllJeuVideo();
		this.jeuVideoService.fetchMyJeuVideo(this.userId);

		this.logged = true;
	}

	//déclanché lors d'une déconnexion
	//RAZ des données
	logout() {
		this.jeuVideoService.allJeuVideo = [];
		this.jeuVideoService.myJeuVideo = [];
		this.jeuVideoService.jeuVideoNonJoue = [];
		this.jeuVideoService.nonRecJeuVideo = [];
		this.filmService.allFilm = [];
		this.filmService.myFilm = [];
		this.filmService.filmNonVu = [];
		this.filmService.nonRecFilm = [];
		this.serieService.serieNonVu = [];
		this.serieService.mySerie = [];
		this.serieService.allSerie = [];
		this.serieService.nonRecSerie = [];
		this.logged = false;
	}
}
