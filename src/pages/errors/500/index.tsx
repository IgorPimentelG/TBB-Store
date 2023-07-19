import { Button } from '@core/components/ui';
import { GrConnect } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { Description, ErrorCode, Title, Wrapper } from '../styles';

export const UnexpectedError = () => {

	const navigate = useNavigate();

	function goHome() {
		navigate('/');
	}

	return (
		<Wrapper>
			<GrConnect size={128} />
			<ErrorCode>500</ErrorCode>
			<Title>Algo Inesperado Ocorreu</Title>
			<Description>
				Desculpe, não foi possível carregar a página por causa de um problema interno
			</Description>

			<Button
				label='PÁGINA INICIAL'
				action={goHome}
			/>
		</Wrapper>
	);
};
