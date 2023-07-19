import { ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
	message: string;
	icon: ReactNode;
}

export const WarningText: React.FC<Props> = ({ message, icon }) => {
	return (
		<Wrapper>
			{icon}
			<span>{message}</span>
		</Wrapper>
	);
};
