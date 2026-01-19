import { userRepo } from '@/entities/user/api/userRepo'
import { useAuthStore } from '../model/auth.store'

export function bootstrapAuth() {
	const { authenticate, unauthenticate } = useAuthStore.getState()
	const user = userRepo.getUser()
	return user ? authenticate() : unauthenticate()
}
