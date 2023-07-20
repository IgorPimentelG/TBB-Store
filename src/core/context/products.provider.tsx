import { DB_PRODUCTS } from '@core/data';
import { Category } from '@core/model/category';
import { Product } from '@core/model/product';
import { ReactNode, useEffect, useState } from 'react';
import { FilterType } from './@types/filter-type';
import { ProductsContext } from './products.context';

type Props = {
	children: ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {

	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [favorites, setFavorites] = useState<Product[]>([]);
	const [filterType, setFilterType] = useState<FilterType>('NONE');

	useEffect(() => {
		getAllProducts();
	}, []);

	useEffect(() => {
		const categories = formatCategories();
		setCategories(categories);
	}, [products]);

	useEffect(() => {
		getAllFavorites();
	}, []);

	function getAllFavorites() {
		const favorites = { ...localStorage };
		const favoritesIds = Object.keys(favorites);
		const produtcs = products.filter((product) => (
			favoritesIds.includes(product.id)
		));
		setFavorites(produtcs);
	}

	function getAllProducts() {
		const products = DB_PRODUCTS.data.nodes as Product[];
		console.log("🚀 ~ file: products.provider.tsx:44 ~ getAllProducts ~ products:", products)
		setProducts(products);
	}

	function filterProductsByCategory(
		categoryId: string,
		alreadyActive: boolean,
	) {
		setFilterType('BY_CATEGORY');

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

	function filterByName(name: string) {
		setFilterType('BY_NAME');
		const productsByName = products.filter(
			(product) => product.name.toLowerCase()
				.includes(name.toLowerCase())
		);
		setFilteredProducts(productsByName);
	}

	function clearFilter() {
		setFilteredProducts([]);
		setFilterType('NONE');
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
		const product = products.find(product => product.id === id);

		if (product) {
			setFavorites((oldState) => [...oldState, product]);
		}
	}

	function removeFavorite(id: string) {
		localStorage.removeItem(id);
		setFavorites((oldState) => oldState.filter(
			(product) => product.id != id
		));
	}

	return (
		<ProductsContext.Provider value={{
			products,
			categories,
			favorites,
			filteredProducts,
			filterType,
			addFavorite,
			removeFavorite,
			filterByName,
			clearFilter,
			filterProductsByCategory,
		}}>
			{children}
		</ProductsContext.Provider>
	);
}
