import { RegisterPage } from '@/pages/auth/register-page'
import { NotFoundPage } from '@/pages/not-found-page'
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
