import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: 16px;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.colors['black-800']};
`;
