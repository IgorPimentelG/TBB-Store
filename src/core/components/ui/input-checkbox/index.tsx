import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Label, Wrapper } from './styles';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	value: string;
};

export const InputCheckbox: React.FC<Props> = ({ label, value, ...rest }) => {
	return (
		<Wrapper>
			<input type='checkbox' id={label} value={value} {...rest} />
			<Label htmlFor={label}>
				{label}
			</Label>
		</Wrapper>
	);
};
