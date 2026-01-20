import { LoginPage } from '@/pages/auth/login-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { ProductDetailsPage } from '@/pages/product-details-page'
import { ProductsListPage } from '@/pages/products-list-page'
import { ROUTES } from '@/shared/config/routes'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layout/app-layout'
import { GuestLayout } from '../layout/guest-layout'
import { ProtectedLayout } from '../layout/ProtectedLayout'

// если бандл будет становаться большим, то лучше подгружать страницы через React.lazy

export const router = createBrowserRouter([
	{
		element: <ProtectedLayout />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						index: true,
						path: ROUTES.productsList(),
						element: <ProductsListPage />
					},
					{
						path: ROUTES.productDetails(':productId'),
						element: <ProductDetailsPage />
					}
				]
			}
		]
	},
	{
		element: <GuestLayout />,
		children: [
			{
				path: ROUTES.auth.login(),
				element: <LoginPage />
			}
		]
	},

	{
		path: '*',
		element: <NotFoundPage />
	}
])
