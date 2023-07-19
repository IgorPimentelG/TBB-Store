import { Header } from '@core/components/layout';
import { Favorites, PageNotFound, Products, UnexpectedError } from '@pages';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <Header />,
		children: [
			{
				path: '/',
				element: <Navigate to='products' />
			},
			{
				path: '/products',
				element: <Products />,
				errorElement: <UnexpectedError />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
				errorElement: <UnexpectedError />,
			},
		],
	},
	{
		path: '*',
		element: <PageNotFound />,
	}
]);

export const Routes = () => {
	return (
		<RouterProvider router={router} />
	);
}
