import styled from 'styled-components';

type SelectProps = {
	length: number;
}

export const Wrapper = styled.div`
	display: flex;
	position: relative;
`;

export const Button = styled.button`
	display: flex;
	gap: 12px;

	padding: 0 16px;
	align-items: center;
	height: 40px;
	border-radius: 100px;
	font-size: 14px;

	${({ theme }) => `
		color: ${theme.colors['white-400']};
		background-color: ${theme.colors['black-500']};
	`};
`;

export const Select = styled.div<SelectProps>`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50px;
	z-index: 999;
	width: 100%;

	border-radius: 8px;
	gap: 8px;
	overflow: hidden;
	height: 0;
	max-width: 400px;
	transition: height 300ms ease-in;

	&[data-show="true"] {
		height: calc(${({ length }) => length} * 90%);
	}

	${({ theme }) => `
		span {
			color: ${theme.colors['white-400']};
		}

		button:hover {
			span {
				color: ${theme.colors['white-900']};
			}
		}

		background-color: ${theme.colors['black-500']};
	`};

	button {
		transition: all 300ms;
		height: 20px;
		margin-top: 8px;
	}
`;
