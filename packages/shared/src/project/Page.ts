import { PageElement } from './PageElement';
import { IPage } from './types';

export class Page implements IPage {
	public static create(p?: IPage) {
		const page = new Page();
		if (p) {
			const { name, description, elements } = p;
			page.name = name;
			page.description = description;
			page.elements = elements.map(element => PageElement.create(element));
		}
		return page;
	}

	public name: string = 'New Page';
	public description: string = 'New Page Description.';
	public elements: PageElement[] = [];

	constructor() {}

	public addElement(element: PageElement) {
		this.elements.push(element);
	}

	public removeElement(element: PageElement) {
		const index = this.elements.indexOf(element);
		if (index >= 0) {
			this.elements.splice(index, 1);
		}
	}

	public insertElement(element: PageElement, index: number) {
		this.elements.splice(index, 0, element);
	}

	public getJSON() {
		const { name, description } = this;
		const elements = this.elements.map(element => element.getJSON());

		return { name, description, elements };
	}
}
