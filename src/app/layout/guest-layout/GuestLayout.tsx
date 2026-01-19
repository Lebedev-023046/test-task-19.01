import { Outlet } from 'react-router-dom'
import styles from './GuestLayout.module.css'

export function GuestLayout() {
	return (
		<main className={styles.root}>
			<Outlet />
		</main>
	)
}
