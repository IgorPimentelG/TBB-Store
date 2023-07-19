import { createGlobalStyle } from 'styled-components';


export const DefaultStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		min-height: 100vh;
		min-width: 100vw;
	}

	body {
		font-family: 'Roboto', sans-serif;
		background-color: ${({ theme }) => theme.colors['white-400']};
	}

	a {
		cursor: pointer;
		outline: none;
	}

	button {
		cursor: pointer;
		border: none;
		background-color: transparent;
	}
`;
