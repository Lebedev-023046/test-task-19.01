import { Button } from '@/shared/ui/button'
import { useNavigate } from 'react-router-dom'
import styles from './DeleteProductButton.module.css'

interface DeleteProductButtonProps {
	productId: string
	isLoading: boolean
	redirect?: string
	onDelete: (id: string) => Promise<void>
}

// можно было бы передавать onDelete без id (передавая ее выше), но я хотел сделать функцию без внешних зависимостей (не учитывая редирект)
export function DeleteProductButton({
	productId,
	isLoading,
	redirect,
	onDelete
}: DeleteProductButtonProps) {
	const navigate = useNavigate()

	const handleDelete = async (id: string) => {
		await onDelete(id)
		redirect && navigate(redirect)
	}

	return (
		<Button
			align='center'
			className={styles.delete}
			onClick={() => handleDelete(productId)}
			disabled={isLoading}
		>
			Delete Product
		</Button>
	)
}
