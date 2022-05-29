import { describe, expect, it } from 'vitest';

import { Project } from '../Project';
import { IProject } from './../types';

describe('class Project', () => {
	it('Project create without project param', () => {
		const project = Project.create();
		const { name, description, pages } = project;

		expect(name).toBe('New Project');
		expect(description).toBe('New Project Description.');
		expect(pages).toHaveLength(1);
		expect(project.getJSON()).toMatchInlineSnapshot(`
			{
			  "description": "New Project Description.",
			  "name": "New Project",
			  "pages": [
			    {
			      "description": "New Page Description.",
			      "elements": [],
			      "name": "New Page",
			    },
			  ],
			}
		`);
	});

	it('Project create without project param', () => {
		const project: IProject = {
			name: 'Project',
			description: 'Project Description.',
			pages: [],
		};
		const newProject = Project.create(project);
		const { name, description, pages } = newProject;

		expect(name).toBe(project.name);
		expect(description).toBe(project.description);
		expect(newProject.getJSON()).toEqual(project);
	});
});
