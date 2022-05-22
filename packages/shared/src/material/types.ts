export interface ICategory {
	name: string;
}

export interface IMaterialData {
	version: string;
	source: string;
}

export interface IMaterial extends IMaterialData {
	id: string;
	type: string;
	category: ICategory;
}

export interface IMaterialLoader {
	type: string;
	load(material: IMaterial): Promise<any>;
}
