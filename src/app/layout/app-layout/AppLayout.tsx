import { ErrorBoundary } from '@/shared/ui/error-boundary/boundary'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { Header } from '@/widgets/layout/header'
import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'

export function AppLayout() {
	return (
		<div className={styles.wrapper}>
			<Header />

			<main className={styles.main}>
				<ErrorBoundary fallback={error => <ErrorFallback error={error} />}>
					<Outlet />
				</ErrorBoundary>
			</main>
		</div>
	)
}
