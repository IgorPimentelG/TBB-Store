import styled from 'styled-components';

export const Wrapper = styled.button`
	display: none;
	justify-content: center;
	align-items: center;

	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background-color: rgba(117, 162, 235, 0.4);

	@media (max-width: 1350px) {
		display: flex;
	}
`;
