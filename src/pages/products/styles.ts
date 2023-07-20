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

	@media (min-width: 2000px) {
		grid-template-columns: repeat(5, 300px);
	}

	@media (max-width: 1080px) {
		grid-template-columns: repeat(3, 250px);
	}

	@media (max-width: 940px) {
		grid-template-columns: repeat(2, 250px);
	}

	@media (max-width: 645px) {
		grid-template-columns: 300px;
	}

	@media (max-width: 422px) {
		grid-template-columns: 250px;
	}
`;
