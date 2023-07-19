import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'black-900': string;
			'black-800': string;
			'black-500': string;
			'white-900': string;
			'white-800': string;
			'white-500': string;
			'white-400': string;
		},
	};
};
