export interface Product {
	id: string
	title: string
	description: string
	image: string
	price: number
}

export interface Products {
	products: Product[]
}
