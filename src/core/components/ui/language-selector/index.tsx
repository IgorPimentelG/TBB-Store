import { useState } from 'react';
import { BsGlobe } from 'react-icons/bs';
import { Button, Select, Wrapper } from './styles';

type Props = {
	languages: string[];
}

export const LanguageSelector: React.FC<Props> = ({
	languages,
}) => {

	const [selectIsOpen, setSelectIsOpen] = useState(false);

	function changeLanguage() {
		setSelectIsOpen(false);
	}

	return (
		<Wrapper>
			<Button onClick={() => setSelectIsOpen(!selectIsOpen)}>
				<BsGlobe />
				<span>PT</span>
			</Button>

			<Select
				data-show={selectIsOpen}
				length={languages.length}
			>
				{languages.map(language => (
					<button
						key={language}
						onClick={changeLanguage}
					>
						<span>{language}</span>
					</button>
				))}
			</Select>
		</Wrapper>
	);
};
