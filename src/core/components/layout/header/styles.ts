import styled from 'styled-components';

export const Wrapper = styled.header`
	display: grid;
	align-items: center;
	grid-template-areas: "nav logo actions";
	grid-template-columns: repeat(3, 1fr);

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	height: 80px;
	padding: 0 52px;
	background-color: ${({ theme }) => theme.colors['black-800']};
	box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.1);

	${({ theme }) => `
		color: ${theme.colors['white-400']};
		background-color: ${theme.colors['black-800']};
	`}

	@media (max-width: 1080px) {
		height: auto;
		padding: 24px 32px;
		grid-template-areas:
			"logo nav"
			"actions actions";
		grid-template-columns: auto;
		gap: 24px;
	}

	@media (max-width: 500px) {
		grid-template-areas:
			"logo"
			"nav"
			"actions";
	}
`;

export const Menu = styled.nav`
	grid-area: nav;
	display: flex;
	gap: 24px;

	span {
		color: ${({ theme }) => theme.colors['white-400']};
		font-size: 16px;
	}

	button:hover {
		span {
			color: ${({ theme }) => theme.colors['white-900']};
		}
	}

	span[data-active="true"] {
		position: relative;

		&::before {
			position: absolute;
			bottom: -12px;
			left: 45%;

			content: "";
			width: 8px;
			height: 8px;
			border-radius: 10px;
			background-color: ${({ theme }) => theme.colors['white-400']};
		}
	}

	@media (max-width: 1080px) {
		justify-content: flex-end;
		margin-bottom: 8px;
	}

	@media (max-width: 500px) {
		justify-content: center;
	}
`;

export const Logo = styled.div`
	grid-area: logo;

	h1 {
		margin-left: 20%;
		font-size: 38px;
		letter-spacing: 2px;
		font-family: 'Tektur';
	}

	@media (max-width: 1080px) {
		h1 {
			margin-left: 0;
			text-align: start;
		}
	}

	@media (max-width: 500px) {
		h1 {
			text-align: center;
		}
	}
`;

export const Actions = styled.div`
	grid-area: actions;

	display: flex;
	justify-content: flex-end;
	gap: 16px;

	@media (max-width: 1080px) {
		justify-content: space-between;
	}

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: center;
	}
`;
