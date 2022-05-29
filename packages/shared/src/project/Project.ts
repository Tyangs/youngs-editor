import { Page } from './Page';
import { IProject } from './types';

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
