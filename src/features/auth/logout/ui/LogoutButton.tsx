import { Button } from '@/shared/ui/button'
import { authRepo } from '../../api/authRepo'
import { useAuthStore } from '../../model/auth.store'

export function LogoutButton() {
	const { unauthenticate } = useAuthStore()

	const handleLogout = () => {
		authRepo.logout()
		unauthenticate()
	}

	return (
		<Button variant='outlined' onClick={handleLogout}>
			Logout
		</Button>
	)
}
