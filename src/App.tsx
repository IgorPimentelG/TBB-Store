import { ProductsProvider } from '@core/context/products.provider';
import { Routes } from '@core/routes';
import { ThemeProvider } from '@core/theme/theme.provider';

const App = () => {
  return (
    <ThemeProvider>
			<ProductsProvider>
				<Routes />
			</ProductsProvider>
		</ThemeProvider>
  );
};

export { App };

