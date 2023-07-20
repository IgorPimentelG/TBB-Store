import { BiUpArrowCircle } from 'react-icons/bi';
import { Wrapper } from './styles';

type Props = {
	stop: string;
};

export const ScrollButton: React.FC<Props> = ({
	stop,
}) => {
	function handleScrollTop() {
		document.getElementById(stop)?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		});
	}

	return (
		<Wrapper onClick={handleScrollTop}>
			<BiUpArrowCircle size={28} />
		</Wrapper>
	);
};
