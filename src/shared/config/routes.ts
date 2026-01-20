export const ROUTES = {
	auth: {
		login: () => '/login'
	},
	productsList: () => '/',
	productDetails: (id: string) => `/products/${id}`
}
