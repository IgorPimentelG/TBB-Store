import { Button } from '@core/components/ui';
import { useTranslation } from 'react-i18next';
import { BsEmojiFrown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Description, ErrorCode, Title, Wrapper } from '../styles';

export const PageNotFound = () => {

	const navigate = useNavigate();
	const { t } = useTranslation();

	function goHome() {
		navigate('/');
	}

	return (
		<Wrapper>
			<BsEmojiFrown size={128} />
			<ErrorCode>404</ErrorCode>
			<Title>{t('pageNotFound.title')}</Title>
			<Description>
				{t('pageNotFound.description')}
			</Description>

			<Button
				label='PÁGINA INICIAL'
				action={goHome}
			/>
		</Wrapper>
	);
};
