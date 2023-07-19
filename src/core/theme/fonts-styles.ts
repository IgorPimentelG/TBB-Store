import { Roboto, RobotoMono, Tektur } from '@core/assets/fonts';
import { createGlobalStyle } from 'styled-components';

export const FontsStyles = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src: url(${Roboto}) format('ttf');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto Mono';
		src: url(${RobotoMono}) format('ttf');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Tektur';
		src: url(${Tektur}) format('ttf');
		font-weight: 500;
		font-style: normal;
	}
`;
