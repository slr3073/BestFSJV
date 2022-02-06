import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DeveloppeurService {
	public developpeur: string[] = [
		'Arkane Studios',
		'ATLUS',
		'BioWare Corp',
		'Bethesda Softworks',
		'Blizzard Entertainment',
		'Bungie Software',
		'CD Projekt RED',
		'CAPCOM',
		'From Software Inc.',
		'id Software',
		'KONAMI',
		'LucasArts',
		'Naughty Dog',
		'Nintendo EAD',
		'Rareware',
		'Rockstar Games',
		'SEGA',
		'SNK',
		'SQUARE ENIX',
		'Telltale Games',
		'Ubisoft Entertainment',
		'Valve'
	];

	constructor() {}
}
