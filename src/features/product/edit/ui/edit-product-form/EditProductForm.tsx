import { InputField } from '@/shared/ui/form-fields/RHF/input-field'

import type { Product } from '@/entities/product/api/types'
import { Button } from '@/shared/ui/button'
import { useEditProductForm } from '../../model/useEditProductForm'
import { EditProductButton } from '../edit-product-button'
import styles from './EditProductForm.module.css'

interface Props {
	product: Product
	onClose: () => void
}

export function EditProductForm({ product, onClose }: Props) {
	const { control, onSubmit } = useEditProductForm({ product })

	const handleSubmit = () => {
		onSubmit()
		onClose()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<h2>Edit Product</h2>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formFields}>
						<InputField
							name='title'
							label='Title'
							placeholder='title'
							control={control}
						/>
						<InputField
							name='description'
							label='Description'
							placeholder='description'
							control={control}
						/>
						<InputField name='price' label='Price, $' control={control} />
					</div>

					<div className={styles.controls}>
						<EditProductButton isLoading={false} />
						<Button variant='outlined' onClick={onClose}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
