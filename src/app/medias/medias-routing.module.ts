import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediasPage } from './medias.page';

const routes: Routes = [
	{
		path: '',
		component: MediasPage,
		children: [
			{
				path: 'films',
				loadChildren: () => import('./films/films.module').then((m) => m.FilmsPageModule)
			},
			{
				path: 'series',
				loadChildren: () => import('./series/series.module').then((m) => m.SeriesPageModule)
			},
			{
				path: 'jeux-video',
				loadChildren: () => import('./jeux-video/jeux-video.module').then((m) => m.JeuxVideoPageModule)
			},
			{
				path: '',
				redirectTo: '/medias/films',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/medias/films',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MediasPageRoutingModule {}
