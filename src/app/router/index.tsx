import { ProductsListPage } from '@/pages/products-list-page'
import { ROUTES } from '@/shared/config/routes'
import { createBrowserRouter } from 'react-router-dom'

import { RegisterPage } from '@/pages/auth/register-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { GuestLayout } from '../layout/GuestLayout'
import { ProtectedLayout } from '../layout/ProtectedLayout'
import { AppLayout } from '../layout/app-layout'

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
					}
				]
			}
		]
	},
	{
		element: <GuestLayout />,
		children: [
			{
				path: ROUTES.auth.register(),
				element: <RegisterPage />
			}
		]
	},

	{
		path: '*',
		element: <NotFoundPage />
	}
])
