import { Filter, Header } from '@core/components/layout';
import { ProductsContext } from '@core/context/products.context';
import { ReactNode, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Content } from './styles';

type Props = {
	children: ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {

	const {
		categories,
		products,
		favorites,
		filteredProducts,
		filterType,
	} = useContext(ProductsContext);
	const location = useLocation();

	const hasCategories = categories.length !== 0;
	const hasProducts = products.length !== 0;

	const totalOfItems = location.pathname.includes('products') ?
		products.length : favorites.length;

	return (
		<div>
			<Header />
				<Content>
					<div>
						<div>
							{hasProducts && (
								<h1>
									{filterType !== 'NONE' ? filteredProducts.length : totalOfItems} Resultados
								</h1>
							)}
						</div>
						<div>
							{hasCategories && <Filter />}
							{children}
						</div>
					</div>
				</Content>
		</div>
	);
};
