import { Button } from '@/shared/ui/button'

interface CreateProductButtonProps {
	isLoading: boolean
}
export function EditProductButton({ isLoading }: CreateProductButtonProps) {
	return (
		<Button disabled={isLoading} type='submit' align='center'>
			Edit Product
		</Button>
	)
}
