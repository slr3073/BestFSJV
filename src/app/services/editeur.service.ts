import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EditeurService {
	public editeur: string[] = [
		'2K Games',
		'Activision-Blizzard',
		'Ankama',
		'Bandai-Namco',
		'Bethesda',
		'Electronics Arts',
		'Nintendo',
		'Sony',
		'Take Two',
		'Ubisoft',
		'Warner Interactive'
	];

	constructor() {}
}
