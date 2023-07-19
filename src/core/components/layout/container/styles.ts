import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 128px 52px 52px 52px;
	align-items: center;
	gap: 18px;
	height: 100vh;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 100px;
		background-color: ${({ theme }) => theme.colors['black-800']};
	}

	& > div > div:nth-child(1) {
		position: sticky;
		top: 0;

		h1 {
			font-size: 38px;
			margin-bottom: 16px;
		}
	}

	& > div > div:nth-child(2) {
		display: flex;
		position: relative;
		gap: 48px;
	}
`;
