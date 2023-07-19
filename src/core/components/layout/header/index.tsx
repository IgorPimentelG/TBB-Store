import { Input, LanguageSelector } from '@core/components/ui';
import { BsSearch } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Actions, Logo, Menu, Wrapper } from './styles';

export const Header = () => {

	const location = useLocation();
	const navigate = useNavigate();

	function isActive(path: string): boolean {
		return location.pathname.includes(path);
	}

	return (
		<Wrapper>
			<Menu>
				<button onClick={() => navigate('products')}>
					<span data-active={isActive('products')}>
						Produtos
					</span>
				</button>
				<hr/>
				<button onClick={() => navigate('favorites')}>
					<span data-active={isActive('favorites')}>
						Favoritos
					</span>
				</button>
			</Menu>

			<Logo>
				<h1>TBB</h1>
			</Logo>

			<Actions>
				<Input
					placeholder='Buscar produto'
					icon={<BsSearch />}
				/>
				<LanguageSelector
					languages={['PT', 'EN', 'ES']}
				/>
			</Actions>
		</Wrapper>
	);
};
