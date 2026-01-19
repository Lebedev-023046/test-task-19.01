import { ErrorBoundary } from '@/shared/ui/error-boundary'
import { Header } from '@/widgets/layout/header'
import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'

export function AppLayout() {
	return (
		<div className={styles.wrapper}>
			<Header />

			<main className={styles.main}>
				<ErrorBoundary
					fallback={error => <div>{error?.message ?? 'Unknown error'}</div>}
				>
					<Outlet />
				</ErrorBoundary>
			</main>
		</div>
	)
}
