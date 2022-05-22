import { IMaterial } from './../material/types';

export interface IElement {
	id: string;
	name: string;
	mId: IMaterial['id'];
	mVersion: IMaterial['version'];
}

export interface IPage {
	name: string;
	description: string;
	elements: IElement[];
}

export interface IProject {
	name: string;
	description: string;
	pages: IPage[];
}
