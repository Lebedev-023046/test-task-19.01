// useProducts.ts
import { useEffect, useState, useSyncExternalStore } from 'react'
import { productStore } from './externalProductStore'

export function useProducts() {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		productStore
			.initFromDB()
			.catch(setError)
			.finally(() => setIsLoading(false))
	}, [])

	const snapshot = useSyncExternalStore(
		productStore.subscribe,
		productStore.getSnapshot
	)

	return {
		products: snapshot.products,
		createProduct: productStore.createProduct,
		isLoading,
		error
	}
}
