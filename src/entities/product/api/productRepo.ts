import type { Products } from './types'

export const productRepo = {
	getLSProducts(): Products {
		const raw = localStorage.getItem('products')
		if (!raw) return { products: [] }

		try {
			return JSON.parse(raw)
		} catch {
			return { products: [] }
		}
	},

	async getDBProducts(): Promise<Products> {
		const res = await fetch('/data/db.json')
		if (!res.ok) return { products: [] }
		return res.json()
	},

	async getProducts(): Promise<Products> {
		const lsProducts = productRepo.getLSProducts()
		if (lsProducts.products.length > 0) return lsProducts

		const dbProducts = await productRepo.getDBProducts()
		localStorage.setItem('products', JSON.stringify(dbProducts))
		return dbProducts
	}
}
