import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PlateformeService {
	public plateformes: string[] = [
		'PC',
		'XBOX ONE',
		'XBOX 360',
		'XBOX',
		'PS4',
		'PS3',
		'PS2',
		'PS VITA',
		'NINTENDO DS',
		'NINTENDO SWITCH',
		'MOBILE',
		'WII U',
		'WII'
	];

	constructor() {}
}
