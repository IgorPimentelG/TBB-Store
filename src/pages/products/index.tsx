import { CardProduct } from '@core/components/layout';
import { Container } from '@core/components/layout/container';
import { WarningText } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import { List, Wrapper } from './styles';

export const Products = () => {

	const {
		products,
		filteredProducts,
		filterType,
		getAllCategories,
	} = useContext(ProductsContext);
	const { t } = useTranslation();

	useEffect(() => {
		getAllCategories('products');
	}, [products]);

	return (
		<Container>
			<Wrapper>
				{products.length === 0 ||
				  (filterType === "BY_NAME" && filteredProducts.length === 0) ? (
						<WarningText
							message={t('warnings.productsNotFound')}
							icon={<BsSearch size={28} />}
						/>
				) : (
					<List>
						{filteredProducts.length !== 0 ? (
							<>
								{filteredProducts.map((product) => (
									<CardProduct
										key={product.id}
										product={product}
									/>
								))}
							</>
						) : (
							<>
								{products.map((product) => (
									<CardProduct
										key={product.id}
										product={product}
									/>
								))}
							</>
						)}
					</List>
				)}
			</Wrapper>
		</Container>

	);
};
