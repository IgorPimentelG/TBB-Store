import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 16px;
	padding: 0 16px;
	align-items: center;
	height: 40px;
	border-radius: 100px;
	background-color: ${({ theme }) => theme.colors['black-500']};
`;

export const Field = styled.input`
	border: none;
	outline: none;
	background-color: transparent;

	font-size: 14px;
	color: ${({ theme }) => theme.colors['white-400']};

	${({ theme }) => `
		color: ${theme.colors['white-400']};

		&::placeholder {
			color: ${theme.colors['white-400']};
		}
	`};
`;
