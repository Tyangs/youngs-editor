export interface ICategory {
	name: string;
}

export interface IMaterialData {
	version: string;
	source: string;
}

type MaterialType = 'component' | 'template';

export interface IMaterial extends IMaterialData {
	id: string;
	name: string;
	label: string;
	thumbnail: string;
	type: MaterialType;
	category: ICategory;
}

export interface IMaterialLoader {
	type: string;
	load(material: IMaterial): Promise<any>;
}
