import { Button } from '@/shared/ui/button'

interface CreateProductButtonProps extends Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'type'
> {
	isLoading: boolean
	children: React.ReactNode
}

export function CreateProductButton({
	isLoading,
	children
}: CreateProductButtonProps) {
	return (
		<Button disabled={isLoading} type='submit' align='center'>
			{children}
		</Button>
	)
}
