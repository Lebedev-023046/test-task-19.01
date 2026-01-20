import { Button } from '@/shared/ui/button'

interface CreateProductButtonProps extends Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'type'
> {
	isLoading: boolean
}

export function CreateProductButton({ isLoading }: CreateProductButtonProps) {
	return (
		<Button disabled={isLoading} type='submit' align='center'>
			Add Product
		</Button>
	)
}
