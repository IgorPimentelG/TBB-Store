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
	filterProductsByName: (name: string, pathname: string) => void;
	getAllCategories: (pathname: string) => void;
	filterProductsByCategory(
		categoryId: string,
		alreadyActive: boolean,
		pathname: string,
	): void;
}
