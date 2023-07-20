import { createContext } from 'react';
import { IProducts } from './@types/product-context';

export const ProductsContext = createContext<IProducts>({
	products: [],
	categories: [],
	favorites: [],
	filteredProducts: [],
	filterType: 'NONE',
	addFavorite: () => {},
	removeFavorite: () => {},
	clearFilter: () => {},
	filterProductsByName: () => {},
	getAllCategories: () => {},
	filterProductsByCategory: () => {},
});
