import { ProductsContext } from '@core/context/products.context';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { InputCheckbox } from '..';
import { Select, Wrapper } from './styles';

export const FilterSelector = () => {

	const {
		categories,
		filterType,
		filterProductsByCategory,
	} = useContext(ProductsContext);

	const { pathname } = useLocation();
	const [selectIsOpen, setSelectIsOpen] = useState(false);

	useEffect(() => {
		if (filterType === 'BY_NAME') {
			clearInputs();
		}
	}, [filterType]);

	function applyFilter(event: ChangeEvent<HTMLInputElement>, categoryId: string) {
		const checked = event.target.checked;
		filterProductsByCategory(categoryId, !checked, pathname);
	}

	function clearInputs() {
		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'input[type="checkbox"]'
		);

		for (const input of inputs) {
			input.checked = false;
		}
	}

	return (
		<Wrapper>
			<button onClick={() => setSelectIsOpen(!selectIsOpen)}>
				<FaFilter size={22} />
			</button>

			<Select
				data-show={selectIsOpen}
				length={categories.length}
			>
				<div>
					{categories.map((category) => (
						<InputCheckbox
							key={category._id}
							label={`${category.name} (${category.total})`}
							value={category._id}
							onChange={(event) => applyFilter(event, category._id)}
						/>
					))}
				</div>
			</Select>

		</Wrapper>
	);
};

