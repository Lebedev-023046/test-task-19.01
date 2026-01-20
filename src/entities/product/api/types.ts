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

export type CreateProductPayload = Omit<Product, 'id'>
export type UpdateProductPayload = CreateProductPayload & { id: string }
