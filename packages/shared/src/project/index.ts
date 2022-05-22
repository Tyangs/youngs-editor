import { IMaterial } from './../material/types';
import { uuid } from './../utils';
import { IElement, IPage, IProject } from './types';

export class Project implements IProject {
	public static create(p?: IProject) {
		const project = new Project();
		if (p) {
			const { name, description, pages } = p;
			project.name = name;
			project.description = description;
			project.pages = pages.map(page => Page.create(page));
			return project;
		}
		const page = Page.create();
		project.addPage(page);
		return project;
	}

	public name: string = 'New Project';
	public description: string = 'New Project Description.';
	public pages: Page[] = [];

	constructor() {}

	public addPage(page: Page) {
		this.pages.push(page);
	}

	public removePage(page: Page) {
		const index = this.pages.indexOf(page);
		if (index >= 0) {
			this.pages.splice(index, 1);
		}
	}

	public insertPage(page: Page, index: number) {
		this.pages.splice(index, 0, page);
	}

	public getJSON() {
		const { name, description } = this;
		const pages = this.pages.map(page => page.getJSON());

		return { name, description, pages };
	}
}

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
