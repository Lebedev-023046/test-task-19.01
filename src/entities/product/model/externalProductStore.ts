// productStore.ts

import { createStore } from '@/shared/store/baseStore'
import { sleep } from '@/shared/utils/sleep'
import { productRepo } from '../api/productRepo'
import type { Product, Products } from '../api/types'

const store = createStore<Products>(productRepo.getLSProducts())

export const productStore = {
	getSnapshot: store.getSnapshot,
	subscribe: store.subscribe,

	async initFromDB() {
		await sleep(1500)
		const products = await productRepo.getProducts()
		store.setSnapshot(products)
	},

	createProduct(payload: Omit<Product, 'id'>) {
		productRepo.createProduct(payload)

		const nextSnapshot = productRepo.getLSProducts()

		store.setSnapshot(nextSnapshot)
	}
}
