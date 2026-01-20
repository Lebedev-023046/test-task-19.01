import { useAuthStore } from '@/features/auth/model/auth.store'
import { ROUTES } from '@/shared/config/routes'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedLayout() {
	const { status } = useAuthStore()

	if (status === 'unauthenticated') {
		return <Navigate to={ROUTES.auth.login()} replace />
	}

	return <Outlet />
}
