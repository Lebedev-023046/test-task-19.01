import { z } from 'zod'

export const addProductSchema = z.object({
	title: z
		.string()
		.min(3, 'Title must be at least 3 characters')
		.max(30, 'Title must be at most 30 characters'),
	description: z
		.string()
		.min(4, 'Description must be at least 4 characters')
		.max(150, 'Description must be at most 150 characters'),
	price: z.coerce.number().gt(0, 'Price must be greater than 0')
})

export type AddProductFormInput = z.input<typeof addProductSchema>
export type AddProductFormValues = z.infer<typeof addProductSchema>
