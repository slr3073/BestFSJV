import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { DataFilmService } from './services/data-film.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private serviceAuth: AuthService,
		private filmService: DataFilmService,
		private navCtrl: NavController
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	//retourne la fin de l'url en cours
	getFinUrl() {
		return location.pathname.split('/').slice(-1)[0].toString();
	}

	//retourne le début de l'url en cours
	getDebutUrl() {
		return location.pathname.split('/').slice(-2)[0].toString();
	}

	//fonction de déconnexion
	onLogout() {
		this.filmService.allFilm = [];
		this.filmService.myFilm = [];
		this.serviceAuth.logout();
		this.navCtrl.navigateBack('connexion');
	}

	//navigation intélligente en fonction de notre url actuelle voir conditions
	goToMedias() {
		switch (this.getFinUrl()) {
			case 'films': {
				this.navCtrl.navigateBack('/medias/films');
				break;
			}

			case 'series': {
				this.navCtrl.navigateBack('/medias/series');
				break;
			}

			case 'jeux-video': {
				this.navCtrl.navigateBack('/medias/jeux-video');
				break;
			}
			default: {
				this.navCtrl.navigateBack('/medias');
			}
		}
	}

	//navigation intélligente en fonction de notre url actuelle voir conditions
	goToRecommandations() {
		switch (this.getFinUrl()) {
			case 'films': {
				this.navCtrl.navigateForward('/recommandations/films');
				break;
			}

			case 'series': {
				this.navCtrl.navigateForward('/recommandations/series');
				break;
			}

			case 'jeux-video': {
				this.navCtrl.navigateForward('/recommandations/jeux-video');
				break;
			}

			default: {
				this.navCtrl.navigateBack('/recommandations');
			}
		}
	}

	//navigue vers les réglages
	goToSettings() {
		this.navCtrl.navigateForward('/reglages');
	}
}
