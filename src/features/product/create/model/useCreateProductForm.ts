import { useProducts } from '@/entities/product/model/useProducts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
	addProductSchema,
	type AddProductFormInput
} from './add-product.schema'

export function useCreateProductForm() {
	const { createProduct } = useProducts()

	const { control, handleSubmit } = useForm<AddProductFormInput>({
		resolver: zodResolver(addProductSchema),
		defaultValues: {
			title: '',
			description: '',
			price: 0
		},

		mode: 'onSubmit'
	})

	const onSubmit = handleSubmit(async values => {
		try {
			const payload = {
				...values,
				price: Number(values.price),
				image: 'images/product-image.webp'
			}
			createProduct(payload)

			toast.success('Product created successfully')
		} catch {
			toast.error('Failed to create product')
		}
	})

	return {
		control,
		onSubmit
	}
}
