import { CardProduct } from '@core/components/layout';
import { Container } from '@core/components/layout/container';
import { WarningText } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { List, Wrapper } from './styles';

export const Favorites = () => {

	const { favorites, filteredProducts, filterType } = useContext(ProductsContext);
	console.log("🚀 ~ file: index.tsx:12 ~ Favorites ~ favorites:", favorites)

	return (
		<Container>
			<Wrapper>
				{filterType === "BY_NAME" && filteredProducts.length === 0 ? (
						<WarningText
							message="Nenhum produto foi favoritado"
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
								{favorites.map((product) => (
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
