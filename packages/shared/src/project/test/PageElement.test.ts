import { uuid } from './../../utils';
import { PageElement } from './../index';
import { IElement } from './../types';

describe('class PageElement', () => {
	it('PageElement create without element param', () => {
		const element = PageElement.create();
		const { id, name, mId, mVersion } = element;

		expect(id).toHaveLength(36);
		expect(mId).toBeUndefined();
		expect(mVersion).toBeUndefined();
		expect(name).toEqual('New Element');
	});

	it('PageElement create with element param', () => {
		const element: IElement = {
			id: uuid(),
			name: 'Element',
			mId: uuid(),
			mVersion: '0.0.1',
		};
		const newElement = PageElement.create(element);

		const { id, name, mId, mVersion } = newElement;
		expect([id, name, mId, mVersion]).toEqual([
			element.id,
			element.name,
			element.mId,
			element.mVersion,
		]);
		expect(newElement.getJSON()).toEqual(element);
	});
});
