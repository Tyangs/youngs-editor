export interface ICategory {
	name: string;
}

export interface IMaterialData {
	version: string;
	source: string;
}

type MaterialType = 'component' | 'template';

export interface IMaterial extends IMaterialData {
	/**
	 * material unique id
	 * @type {string}
	 * @example "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
	 * @memberof IMaterial
	 */
	id: string;
	/**
	 * material name
	 * @type {string}
	 * @example "Image"
	 * @memberof IMaterial
	 */
	name: string;
	/**
	 * material display label
	 * @type {string}
	 * @example "图片"
	 * @memberof IMaterial
	 */
	label: string;
	/**
	 * material display thumbnail
	 * @type {string}
	 * @example "@/assets/thumbnail/image.svg"
	 * @memberof IMaterial
	 */
	thumbnail: string;
	/**
	 * material type
	 * @type {'component' | 'template'}
	 * @example "component"
	 * @memberof IMaterial
	 */
	type: MaterialType;
	/**
	 * material category type
	 * @type {ICategory}
	 * @memberof IMaterial
	 */
	category: ICategory;
}

export interface IMaterialLoader {
	type: string;
	load(material: IMaterial): Promise<any>;
}
