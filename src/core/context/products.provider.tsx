import { DB_PRODUCTS } from '@core/data';
import { Category } from '@core/model/category';
import { Product } from '@core/model/product';
import { ReactNode, useEffect, useState } from 'react';
import { ProductsContext } from './products.context';

type Props = {
	children: ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {

	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [favorites, setFavorites] = useState<string[]>([]);

	useEffect(() => {
		getAllProducts();
	}, []);

	useEffect(() => {
		const categories = formatCategories();
		setCategories(categories);
	}, [products]);

	useEffect(() => {
		const favorites = { ...localStorage };
		const favoritesIds = Object.keys(favorites);
		setFavorites(favoritesIds);
	}, []);

	function getAllProducts() {
		const products = DB_PRODUCTS.data.nodes as Product[];
		setProducts(products);
	}

	function filterProductsByCategory(
		categoryId: string,
		alreadyActive: boolean,
	) {
		if (alreadyActive) {
			setFilteredProducts((oldState) => oldState.filter(
				({ category }) => category._id !== categoryId
			));
		} else {
			const productsByCategory = products.filter(
				({ category }) => category._id === categoryId
			);
			setFilteredProducts((oldState) => [
				...oldState,
				...productsByCategory
			]);
		}
	}

	function cleanFilter() {
		setFilteredProducts([]);
	}

	/**
	 * @param products
	 * @returns the categories without diplication and the calucation of the total of items
	 */
	function formatCategories(): Category[] {
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
			filteredProducts,
			addFavorite,
			removeFavorite,
			cleanFilter,
			filterProductsByCategory,
		}}>
			{children}
		</ProductsContext.Provider>
	);
}
