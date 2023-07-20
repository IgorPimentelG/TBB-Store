import { ProductsContext } from '@core/context/products.context';
import { Product } from '@core/model/product';
import { useContext } from 'react';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { Wrapper } from './styles';

type Props = {
	product: Product;
};

export const CardProduct: React.FC<Props> = ({ product }) => {

	const { favorites, addFavorite, removeFavorite } = useContext(ProductsContext);
	const { id, name, shortDescription, images } = product;

	function handleFavorite() {
		if (isFavorite()) {
			removeFavorite(id);
		} else {
			addFavorite(id);
		}
	}

	function isFavorite(): boolean {
		return favorites.some((product) => product.id == id);
	}

	return (
		<Wrapper>
			<section>
				<button onClick={handleFavorite}>
					{isFavorite() ? (
						<BsFillHeartFill color={'#C42B2B'} size={20} />
					) : (
						<BsHeart size={20} />
					)}
				</button>

				<img
					src={images[0].asset.url}
					alt={images[0].alt}
				/>
			</section>

			<section>
				<h4>{name}</h4>
				<p>{shortDescription}</p>
			</section>
		</Wrapper>
	);
};
