import { Button } from '@core/components/ui';
import { BsEmojiFrown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Description, ErrorCode, Title, Wrapper } from '../styles';

export const PageNotFound = () => {

	const navigate = useNavigate();

	function goHome() {
		navigate('/');
	}

	return (
		<Wrapper>
			<BsEmojiFrown size={128} />
			<ErrorCode>404</ErrorCode>
			<Title>Página Não Encontrada</Title>
			<Description>
				Desculpe, a página que você está procurando não existe ou foi movida
			</Description>

			<Button
				label='PÁGINA INICIAL'
				action={goHome}
			/>
		</Wrapper>
	);
};
