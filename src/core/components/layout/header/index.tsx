import { InputText, LanguageSelector } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Actions, Logo, Menu, Wrapper } from './styles';

export const Header = () => {

	const location = useLocation();
	const navigate = useNavigate();
	const { t }  = useTranslation();

	const { filterByName, clearFilter, filterType } = useContext(ProductsContext);
	const [filterProduct, setFilterProduct] = useState('');

	useEffect(() => {
		if (filterProduct.length > 0) {
			filterByName(filterProduct);
		} else if (filterType !== 'NONE') {
			clearFilter();
		}
	}, [filterProduct]);

	useEffect(() => {
		if (filterType === 'BY_CATEGORY') {
			setFilterProduct('');
		}
	}, [filterType]);

	function isActive(path: string): boolean {
		return location.pathname.includes(path);
	}

	return (
		<Wrapper>
			<Menu>
				<button onClick={() => navigate('/products')}>
					<span data-active={isActive('products')}>
						{t('menu.products')}
					</span>
				</button>
				<hr/>
				<button onClick={() => navigate('/favorites')}>
					<span data-active={isActive('favorites')}>
					{t('menu.favorites')}
					</span>
				</button>
			</Menu>

			<Logo>
				<h1>TBB Store</h1>
			</Logo>

			<Actions>
				<InputText
					placeholder={t('titles.searchPlaceholder')}
					icon={<BsSearch />}
					value={filterProduct}
					onChange={(event) => setFilterProduct(event.target.value)}
				/>
				<LanguageSelector />
			</Actions>
		</Wrapper>
	);
};
