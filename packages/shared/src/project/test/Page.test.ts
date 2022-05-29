import { describe, expect, it } from 'vitest';

import { Page } from '../Page';
import { PageElement } from './../PageElement';
import { IPage } from './../types';

describe('class Page', () => {
	it('Page create without page param', () => {
		const page = Page.create();
		const { name, description, elements } = page;

		expect(name).toBe('New Page');
		expect(description).toBe('New Page Description.');
		expect(elements).toHaveLength(0);
		expect(page.getJSON()).toMatchInlineSnapshot(`
			{
			  "description": "New Page Description.",
			  "elements": [],
			  "name": "New Page",
			}
		`);
	});

	it('Page create with page param', () => {
		const page: IPage = {
			name: 'Page',
			description: 'Description',
			elements: [],
		};
		const newPage = Page.create(page);
		const { name, description, elements } = newPage;

		expect(name).toBe(page.name);
		expect(description).toBe(page.description);
		expect(elements).toHaveLength(0);
		expect(newPage.getJSON()).toEqual(page);
	});
});
