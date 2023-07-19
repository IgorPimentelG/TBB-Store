import { Label, Wrapper } from './styles';

type Props = {
	label: string;
	value: string;
};

export const InputCheckbox: React.FC<Props> = ({ label, value }) => {
	return (
		<Wrapper>
			<input type='checkbox' id={label} value={value} />
			<Label htmlFor={label}>
				{label}
			</Label>
		</Wrapper>
	);
};
