import { InputField } from '@/shared/ui/form-fields/RHF/input-field'
import { useCreateProductForm } from '../../model/useCreateProductForm'
import { CreateProductButton } from '../create-product-button'
import styles from './CreateProductForm.module.css'

export function CreateProductForm() {
	const { control, onSubmit } = useCreateProductForm()

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<h2>Add New Product</h2>
				<form className={styles.form} onSubmit={onSubmit}>
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
					<CreateProductButton isLoading={false} />
				</form>
			</div>
		</div>
	)
}
