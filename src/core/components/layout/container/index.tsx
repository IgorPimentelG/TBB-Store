import { Filter, Header } from '@core/components/layout';
import { FilterSelector, ScrollButton } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { ReactNode, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Content, Results } from './styles';

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

	const [showScrollButton, setShowScrollButton] = useState(false);

	const contentRef = useRef<HTMLDivElement>(null);
	const { pathname } = useLocation();
	const { t }  = useTranslation();

	const hasCategories = categories.length !== 0;
	const hasProducts = products.length !== 0;
	const hasFavorite = favorites.length !== 0;

	const showTotal = pathname.includes('products') ? hasProducts : hasFavorite;

	const totalOfItems = pathname.includes('products') ?
		products.length : favorites.length;

	function handleScroll() {
		if (contentRef.current && contentRef.current.scrollTop > 200) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false);
		}
	}

	return (
		<div>
			<Header />
				<Content onScroll={handleScroll} ref={contentRef}>
					<div>
						<div>
							<Results>
								{showTotal && (
									<h1 id='results'>
										{filterType !== 'NONE' ?
											filteredProducts.length : totalOfItems}
											{` ${t('titles.results')}`}
									</h1>
								)}
							</Results>
							<FilterSelector />
						</div>

						<div>
							{hasCategories && <Filter />}
							{children}
						</div>
					</div>
				</Content>
				{showScrollButton && <ScrollButton stop='results' />}
		</div>
	);
};
