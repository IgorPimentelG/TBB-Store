import { Category } from '@core/model/category';
import { Product } from '@core/model/product';

export interface IProducts {
	products: Product[];
	categories: Category[];
	favorites: string[];
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
};
