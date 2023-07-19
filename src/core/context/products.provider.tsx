import { DB_PRODUCTS } from '@core/data';
import { Category } from '@core/model/category';
import { Product } from '@core/model/product';
import { ReactNode, useEffect, useState } from 'react';
import { ProductsContext } from './products.context';

type Props = {
	children: ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {

	useEffect(() => {
		const products = DB_PRODUCTS.data.nodes as Product[];
		setProducts(products);

		const categories = formatCategories(products);
		setCategories(categories);
	}, []);

	useEffect(() => {
		const favorites = { ...localStorage };
		const favoritesIds = Object.keys(favorites);
		setFavorites(favoritesIds);
	}, []);

	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [favorites, setFavorites] = useState<string[]>([]);

	/**
	 * @param products
	 * @returns the categories without diplication and the calucation of the total of items
	 */
	function formatCategories(products: Product[]): Category[] {
		const categories: Category[] = [];

		products.forEach((product) => {
			const category = categories.findIndex((category) => (
				category._id === product.category._id
			));

			if (category > -1) {
				categories[category].total++;
			} else {
				categories.push({
					...product.category,
					total: 1,
				});
			}
		});
		return categories;
	}

	function addFavorite(id: string) {
		localStorage.setItem(id, id);
		setFavorites((oldState) => [...oldState, id]);
	}

	function removeFavorite(id: string) {
		localStorage.removeItem(id);
		setFavorites((oldState) => oldState.filter(
			(productId) => productId != id
		));
	}

	return (
		<ProductsContext.Provider value={{
			products,
			categories,
			favorites,
			addFavorite,
			removeFavorite,
		}}>
			{children}
		</ProductsContext.Provider>
	);
}
