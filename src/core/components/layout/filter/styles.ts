import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 60px;

	width: 280px;
	height: fit-content;
	padding: 12px;
	gap: 14px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors['white-900']};

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 300ms ease-in;

		& > button:hover {
			transform: scale(1.07);
		}
	}

	${({ theme }) => `
		border: 1px solid ${theme.colors['white-400']};
		background-color: ${theme.colors['white-900']};

		hr {
			border-radius: 10px;
			border-top: 2px solid ${theme.colors['white-800']};
		}
	`};

	section {
		margin-top: 4px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	@media (max-width: 1350px) {
		display: none;
	}
`;

export const Title = styled.h3`
	font-size: 24px;
	color: ${({ theme }) => theme.colors['black-800']};
`;
