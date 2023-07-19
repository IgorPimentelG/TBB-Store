import { InputCheckbox } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { useContext } from 'react';
import { Title, Wrapper } from './styles';

export const Filter = () => {

	const { categories } = useContext(ProductsContext);

	return (
		<Wrapper>
			<Title>Filtros</Title>

			<hr />

			<section>
				{categories.map((category) => (
					<InputCheckbox
						label={`${category.name} (${category.total})`}
						value={category._id}
					/>
				))}
			</section>
		</Wrapper>
	);
};

