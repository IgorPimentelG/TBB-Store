import { createContext } from 'react';
import { IProducts } from './@types/product-context';

export const ProductsContext = createContext<IProducts>({
	products: [],
	categories: [],
});
