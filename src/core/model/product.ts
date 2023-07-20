import { Category } from './category';

type Image = {
	alt: string;
	asset: {
		url: string;
	};
};

export type Product = {
	id: string;
	name: string;
	shortDescription: string;
	images: Image[];
	category: Category;
};

export interface IProducts {
	products: Product[];
	categories: Category[];
}
