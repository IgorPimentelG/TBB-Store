import { CardProduct } from '@core/components/layout';
import { Container } from '@core/components/layout/container';
import { WarningText } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { List, Wrapper } from './styles';

export const Products = () => {

	const { products } = useContext(ProductsContext);

	return (
		<Container>
			<Wrapper>
				{products.length === 0 ? (
					<WarningText
						message="Nenhum produto foi encontrado no momento"
						icon={<BsSearch size={28} />}
					/>
				) : (
					<List>
						{products.map((product) => (
							<CardProduct
								key={product.id}
								product={product}
							/>
						))}
					</List>
				)}
			</Wrapper>
		</Container>

	);
};
