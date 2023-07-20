import { Category } from '@core/model/category';
import { Product } from '@core/model/product';
import { FilterType } from './filter-type';

export interface IProducts {
	products: Product[];
	categories: Category[];
	favorites: Product[];
	filteredProducts: Product[];
	filterType: FilterType;
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
	clearFilter: () => void;
	filterByName: (name: string) => void;
	filterProductsByCategory(
		categoryId: string,
		alreadyActive: boolean
	): void;
};
