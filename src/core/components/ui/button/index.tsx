import { Wrapper } from './styles';

type Props = {
	label: string;
	action: () => void;
};

export const Button: React.FC<Props> = ({
	label,
	action,
}) => {
	return (
		<Wrapper onClick={action}>
			<span>
				{label}
			</span>
		</Wrapper>
	);
};
