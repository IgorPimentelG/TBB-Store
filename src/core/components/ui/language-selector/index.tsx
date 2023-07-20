import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsGlobe } from 'react-icons/bs';
import { Button, Select, Wrapper } from './styles';


const LANGUAGES = [
	{
		key: 'pt-BR',
		acronym: 'PT',
	},
	{
		key: 'en-US',
		acronym: 'EN',
	},
	{
		key: 'es',
		acronym: 'ES',
	},
];

export const LanguageSelector = () => {

	const { i18n } = useTranslation();
	const [selectIsOpen, setSelectIsOpen] = useState(false);
	const [currentLanguage, setCurrentLanguage] = useState('PT');

	useEffect(() => {
		const language = LANGUAGES.find(lng => lng.key === i18n.language);
		setCurrentLanguage(language?.acronym || 'PT');
	}, [i18n.language]);

	function changeLanguage(language: string) {
		i18n.changeLanguage(language);
		setSelectIsOpen(false);
	}

	return (
		<Wrapper>
			<Button onClick={() => setSelectIsOpen(!selectIsOpen)}>
				<BsGlobe />
				<span>{currentLanguage}</span>
			</Button>

			<Select
				data-show={selectIsOpen}
				length={LANGUAGES.length}
			>
				{LANGUAGES.map(language => (
					<button
						key={language.key}
						onClick={() => changeLanguage(language.key)}
					>
						<span>{language.acronym}</span>
					</button>
				))}
			</Select>
		</Wrapper>
	);
};
