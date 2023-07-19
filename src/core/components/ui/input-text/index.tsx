import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { Field, Wrapper } from './styles';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	icon?: ReactNode;
};

export const InputText: React.FC<Props> = ({ icon, ...rest }) => {
	return (
		<Wrapper>
			{icon}
			<Field {...rest} />
		</Wrapper>
	);
};
