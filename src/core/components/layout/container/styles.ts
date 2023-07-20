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

		display: flex;
		justify-content: space-between;
		width: 100%;

		@media (max-width: 1350px) {
			position: relative;
		}

		@media (max-width: 645px) {
			flex-direction: column-reverse;
			align-items: center;
			gap: 12px;
			width: 100%;
		}
	}

	& > div > div:nth-child(2) {
		display: flex;
		position: relative;
		gap: 48px;
	}

	@media (max-width: 1080px) {
		margin-top: calc(160px - 80px);
	}

	@media (max-width: 500px) {
		margin-top: calc(260px - 80px);
	}
`;

export const Results = styled.div`
		h1 {
			font-size: 38px;
			margin-bottom: 16px;

			@media (max-width: 376px) {
				font-size: 28px;
			}
		}
`;
