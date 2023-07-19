import { Category } from '@core/model/category';
import { Product } from '@core/model/product';

export interface IProducts {
	products: Product[];
	categories: Category[];
	favorites: string[];
	filteredProducts: Product[];
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
	cleanFilter: () => void;
	filterProductsByCategory(
		categoryId: string,
		alreadyActive: boolean
	): void;
};
