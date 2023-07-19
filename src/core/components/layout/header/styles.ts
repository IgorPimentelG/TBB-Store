import styled from 'styled-components';

export const Wrapper = styled.header`
	display: grid;
	align-items: center;
	grid-template-areas: "nav logo actions";
	grid-template-columns: repeat(3, 1fr);

	height: 80px;
	padding: 0 52px;
	background-color: ${({ theme }) => theme.colors['black-800']};
	box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.1);

	${({ theme }) => `
		color: ${theme.colors['white-400']};
		background-color: ${theme.colors['black-800']};
	`}

	@media (max-width: 900px) {
		height: auto;
		padding: 24px 52px;
		grid-template-areas:
			"logo logo logo"
			"nav nav nav"
			"actions actions actions";
		gap: 24px;
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
			left: 40%;

			content: "";
			width: 8px;
			height: 8px;
			border-radius: 10px;
			background-color: ${({ theme }) => theme.colors['white-400']};
		}
	}

	@media (max-width: 900px) {
		justify-content: center;
	}
`;

export const Logo = styled.div`
	grid-area: logo;

	h1 {
		margin-left: 20%;
		font-size: 48px;
		letter-spacing: 2px;
	}

	@media (max-width: 900px) {
		h1 {
			margin-left: 0;
			text-align: center;
		}
	}
`;

export const Actions = styled.div`
	grid-area: actions;

	display: flex;
	justify-content: flex-end;
	gap: 16px;

	@media (max-width: 900px) {
		justify-content: center;
	}

	@media (max-width: 372px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;
