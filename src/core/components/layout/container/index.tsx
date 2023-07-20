import { Filter, Header } from '@core/components/layout';
import { ProductsContext } from '@core/context/products.context';
import { ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
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

	const { pathname } = useLocation();
	const { t }  = useTranslation();

	const hasCategories = categories.length !== 0;
	const hasProducts = products.length !== 0;
	const hasFavorite = favorites.length !== 0;

	const showTotal = pathname.includes('products') ? hasProducts : hasFavorite ;

	const totalOfItems = pathname.includes('products') ?
		products.length : favorites.length;

	return (
		<div>
			<Header />
				<Content>
					<div>
						<div>
							{showTotal && (
								<h1>
									{filterType !== 'NONE' ?
										filteredProducts.length : totalOfItems} {t('titles.results')}
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
