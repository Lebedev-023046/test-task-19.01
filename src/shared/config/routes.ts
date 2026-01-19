export const ROUTES = {
	auth: {
		register: () => '/register'
	},
	productsList: () => '/',
	productDetails: (id: string) => `/products/${id}`
}
