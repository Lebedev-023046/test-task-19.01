import { useProducts } from '@/entities/product/model/useProducts'
import { sleep } from '@/shared/utils/sleep'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function useDeleteProduct() {
	const { deleteProduct } = useProducts()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	const mutation = async (id: string) => {
		setIsLoading(true)

		try {
			await sleep(1000)
			deleteProduct(id)
			toast.success('Product deleted')
		} catch (error) {
			setError(error instanceof Error ? error : new Error(String(error)))
			toast.error('Something went wrong')
		} finally {
			setIsLoading(false)
		}
	}

	return {
		mutation,
		isLoading,
		error,
		isError: Boolean(error)
	}
}
