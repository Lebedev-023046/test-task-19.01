import { Button } from '@/shared/ui/button'

export function RegisterButton({ isPending }: { isPending: boolean }) {
	return (
		<Button disabled={isPending} type='submit' align='center'>
			Register
		</Button>
	)
}
