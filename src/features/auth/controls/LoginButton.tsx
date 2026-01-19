import { Button } from '@/shared/ui/button'

export function LoginButton({ isPending }: { isPending: boolean }) {
	return (
		<Button disabled={isPending} type='submit' align='center'>
			Login
		</Button>
	)
}
