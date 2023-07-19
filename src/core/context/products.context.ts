import { createContext } from 'react';
import { IProducts } from './@types/product-context';

export const ProductsContext = createContext<IProducts>({
	products: [],
	categories: [],
	favorites: [],
	filteredProducts: [],
	addFavorite: () => {},
	removeFavorite: () => {},
	cleanFilter: () => {},
	filterProductsByCategory: () => {},
});
