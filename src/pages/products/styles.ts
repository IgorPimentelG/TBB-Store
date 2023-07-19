import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	h2 {
		font-size: 28px;
	}
`;

export const List = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 300px);
	gap: 24px;

	padding-right: 8px;
`;
