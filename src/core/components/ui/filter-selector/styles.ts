import styled from 'styled-components';

type SelectProps = {
	length: number;
}

export const Wrapper = styled.div`
	display: none;
	flex-direction: column;
	position: relative;
	z-index: 800;

	& > button {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 50px;
		width: 50px;
		border-radius: 10px;

		${({ theme }) => `
		  border: 1px solid ${theme.colors['white-400']};
			background-color: ${theme.colors['white-900']};
		`};
	}

	@media (max-width: 1350px) {
		display: flex;
	}
`;

export const Select = styled.section<SelectProps>`
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 60px;
		right: 0;

		overflow: hidden;
		z-index: 800;
		width: 230px;
		border-radius: 10px;
		gap: 12px;
		height: 0;
		transition: height 300ms ease-in;
		background-color: ${({ theme }) => theme.colors['white-900']};

		& > div {
			display: flex;
			flex-direction: column;
			gap: 8px;
			margin: 12px;
			overflow: hidden;
		}

		&[data-show="true"] {
			height: calc(${({ length }) => length} * 52%);
			border: 1px solid ${({ theme }) => theme.colors['white-400']};
		}

		@media (max-width: 645px) {
			right: -90px;

			&[data-show="true"] {
				height: calc(${({ length }) => length} * 63%);
			}
		}
`;

