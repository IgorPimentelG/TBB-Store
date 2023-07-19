import styled from 'styled-components';

export const Wrapper = styled.button`
	border-radius: 100px;
	padding: 16px 32px;

	${({ theme }) => `
		color: ${theme.colors['white-800']};
		background-color: ${theme.colors['black-500']};
	`}

	span {
		font-weight: bold;
		letter-spacing: 2px;
	}
`;
