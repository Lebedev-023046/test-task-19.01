import type { Product } from '@/entities/product/api/types'
import { useProducts } from '@/entities/product/model/useProducts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
	editProductSchema,
	type EditProductFormInput
} from './edit-product.schema'

interface Props {
	product: Product
	onSuccess?: () => void
}

export function useEditProductForm({ product, onSuccess }: Props) {
	const { updateProduct } = useProducts()

	const defaultValues = {
		title: product.title ?? '',
		description: product.description ?? '',
		price: product.price ?? 0
	}

	const { control, handleSubmit, reset } = useForm<EditProductFormInput>({
		resolver: zodResolver(editProductSchema),
		defaultValues,
		mode: 'onSubmit'
	})

	const onSubmit = handleSubmit(async values => {
		console.log({ values })

		try {
			const payload = {
				id: product.id,
				image: product.image,
				...values,
				price: Number(values.price)
			}

			updateProduct(payload)
			reset()

			onSuccess?.()
			toast.success('Product updated successfully')
		} catch {
			toast.error('Failed to update product')
		}
	})

	return {
		control,
		onSubmit
	}
}
