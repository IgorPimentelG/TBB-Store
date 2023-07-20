import { Button } from '@core/components/ui';
import { useTranslation } from 'react-i18next';
import { GrConnect } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { Description, ErrorCode, Title, Wrapper } from '../styles';

export const UnexpectedError = () => {

	const navigate = useNavigate();
	const { t } = useTranslation();

	function goHome() {
		navigate('/');
	}

	return (
		<Wrapper>
			<GrConnect size={128} />
			<ErrorCode>500</ErrorCode>
			<Title>{t('pageUnexpectedError.title')}</Title>
			<Description>
				{t('pageUnexpectedError.description')}
			</Description>

			<Button
				label='PÁGINA INICIAL'
				action={goHome}
			/>
		</Wrapper>
	);
};
