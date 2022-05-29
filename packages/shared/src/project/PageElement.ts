import { IMaterial } from './../material/types';
import { uuid } from './../utils';
import { IElement } from './types';

export class PageElement implements IElement {
	public static create(e?: IElement) {
		const element = new PageElement();
		if (e) {
			const { id, name, mId, mVersion } = e;
			element.id = id;
			element.name = name;
			element.mId = mId;
			element.mVersion = mVersion;
		}
		return element;
	}

	public id: string = uuid();
	public name: string = 'New Element';
	public mId: IMaterial['id'];
	public mVersion: string;

	constructor() {}

	public getJSON() {
		const { id, name, mId, mVersion } = this;

		return { id, name, mId, mVersion };
	}
}
