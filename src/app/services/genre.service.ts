import { Injectable, OnInit } from '@angular/core';
import { CoupleGenreCompteur } from './interfaces/genre';

@Injectable({
	providedIn: 'root'
})
export class GenreService implements OnInit {
	private compteur: number = 0;

	genres: CoupleGenreCompteur[] = [];

	public genre: string[] = [
		'ACTION',
		'AVENTURE',
		'COMEDIQUE',
		'DRAMATIQUE',
		'ESPIONNAGE',
		'FANTASY',
		'GUERRE',
		'HISTORIQUE',
		'HORREUR',
		'MUSICAL',
		'ROMANCE',
		'SCIENCE-FICTION',
		'SUPER-HEROS',
		'SURVIVAL',
		'THRILLER',
		'WESTERN'
	];

	constructor() {}

	ngOnInit() {}
}
