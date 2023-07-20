import { InputCheckbox } from '@core/components/ui';
import { ProductsContext } from '@core/context/products.context';
import { ChangeEvent, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClear } from 'react-icons/ai';
import { Title, Wrapper } from './styles';

export const Filter = () => {

	const {
		categories,
		filteredProducts,
		filterType,
		clearFilter,
		filterProductsByCategory,
	} = useContext(ProductsContext);

	const { t }  = useTranslation();

	useEffect(() => {
		if (filterType === 'BY_NAME') {
			clearInputs();
		}
	}, [filterType]);

	function applyFilter(event: ChangeEvent<HTMLInputElement>, categoryId: string) {
		const checked = event.target.checked;
		filterProductsByCategory(categoryId, !checked);
	}

	function handleClearFilter() {
		clearInputs();
		clearFilter();
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
			<div>
				<Title>{t('titles.filters')}</Title>
				{filteredProducts.length !== 0 && filterType === 'BY_CATEGORY' && (
					<button onClick={handleClearFilter}>
						<AiOutlineClear size={28} />
					</button>
				)}
			</div>
			<hr />
			<section>
				{categories.map((category) => (
					<InputCheckbox
						key={category._id}
						label={`${category.name} (${category.total})`}
						value={category._id}
						onChange={(event) => applyFilter(event, category._id)}
					/>
				))}
			</section>
		</Wrapper>
	);
};

