import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components';
import { DefaultStyles } from './default-styles';
import { FontsStyles } from './fonts-styles';

type Props = {
	children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {

	const DEFAULT_THEME: DefaultTheme = {
		colors: {
			'black-900': '#000000',
			'black-800': '#131216',
			'black-500': '#252428',
			'white-900': '#FFFFFF',
			'white-800': '#F5F5F5',
			'white-500': '#E2E1E0',
			'white-400': '#D3D3D3',
			'white-200': '#F2F2F2',
		},
	};

	return (
		<StyledProvider theme={DEFAULT_THEME}>
			<FontsStyles />
			<DefaultStyles />
			{children}
		</StyledProvider>
	);
};
