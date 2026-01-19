import { useAuthStore } from '@/features/auth/model/auth.store'
import { ROUTES } from '@/shared/config/routes'
import { Navigate, Outlet } from 'react-router-dom'
import styles from './GuestLayout.module.css'

export function GuestLayout() {
	const { status } = useAuthStore()

	if (status === 'authenticated') {
		return <Navigate to={ROUTES.productsList()} replace />
	}

	return (
		<main className={styles.root}>
			<Outlet />
		</main>
	)
}
