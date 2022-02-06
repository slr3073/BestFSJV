import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'medias', pathMatch: 'full' },
	{
		path: 'connexion',
		loadChildren: () => import('./auth/connexion/connexion.module').then((m) => m.ConnexionPageModule)
	},
	{
		path: 'inscription',
		loadChildren: () => import('./auth/inscription/inscription.module').then((m) => m.InscriptionPageModule)
	},
	{
		path: 'recommandations',
		canLoad: [ AuthGuard ],
		loadChildren: () => import('./recommandations/recommandations.module').then((m) => m.RecommandationsPageModule)
	},
	{
		path: 'medias',
		canLoad: [ AuthGuard ],
		loadChildren: () => import('./medias/medias.module').then((m) => m.MediasPageModule)
	},
	{
		path: 'selectionner-film',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./selection/selectionner-film/selectionner-film.module').then((m) => m.SelectionnerFilmPageModule)
	},
	{
		path: 'selectionner-serie',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./selection/selectionner-serie/selectionner-serie.module').then(
				(m) => m.SelectionnerSeriePageModule
			)
	},
	{
		path: 'selectionner-jeu-video',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./selection/selectionner-jeu-video/selectionner-jeu-video.module').then(
				(m) => m.SelectionnerJeuVideoPageModule
			)
	},
	{
		path: 'info-film/:idFilm',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/classique/info-film/info-film.module').then((m) => m.InfoFilmPageModule)
	},
	{
		path: 'info-serie/:idSerie',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/classique/info-serie/info-serie.module').then((m) => m.InfoSeriePageModule)
	},
	{
		path: 'info-jeu-video/:idJeuVideo',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/classique/info-jeu-video/info-jeu-video.module').then(
				(m) => m.InfoJeuVideoPageModule
			)
	},
	{
		path: 'info-add-film/:idFilm',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/alternatif/info-add-film/info-add-film.module').then(
				(m) => m.InfoAddFilmPageModule
			)
	},
	{
		path: 'info-add-serie/:idSerie',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/alternatif/info-add-serie/info-add-serie.module').then(
				(m) => m.InfoAddSeriePageModule
			)
	},
	{
		path: 'info-add-jeu-video/:idJeuVideo',
		canLoad: [ AuthGuard ],
		loadChildren: () =>
			import('./visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.module').then(
				(m) => m.InfoAddJeuVideoPageModule
			)
	},
	{
		path: 'reglages',
		canLoad: [ AuthGuard ],
		loadChildren: () => import('./reglages/reglages.module').then((m) => m.ReglagesPageModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
