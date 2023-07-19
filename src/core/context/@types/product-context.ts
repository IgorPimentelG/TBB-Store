import { Category } from '@core/model/category';
import { Product } from '@core/model/product';

export interface IProducts {
	products: Product[];
	categories: Category[];
};
