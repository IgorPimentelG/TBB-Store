import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 280px;
	padding: 12px;
	border-radius: 10px;

	${({theme}) => `
		background-color: ${theme.colors['white-900']};
		border: 1px solid ${theme.colors['white-400']};
	`};

	img {
		object-fit: cover;
		height: 240px;
		width: 240px;
		margin-bottom: 8px;
	}

	section:nth-child(1) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		button {
			position: absolute;
			top: 8px;
			right: 8px;
			transition: all 300ms ease-in;

			&:hover {
				transform: scale(1.07);
			}
		}
	}

	section:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 8px;

		height: 100%;
		padding: 12px;
		border-radius: 10px;
		background-color: ${({theme}) => theme.colors['white-800']};

		h4 {
			font-size: 16px;
			text-transform: capitalize;
			color: ${({theme}) => theme.colors['black-800']};
		}

		p {
			font-size: 14px;
			color: #979797;
		}
	}
`;
