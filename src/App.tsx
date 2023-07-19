import { Routes } from '@core/routes';
import { ThemeProvider } from '@core/theme/theme.provider';

const App = () => {
  return (
    <ThemeProvider>
			<Routes />
		</ThemeProvider>
  );
};

export { App };

