import styles from './Fallback.module.css'

export function ErrorFallback({ error }: { error: Error | null }) {
	const errorMessage = error?.message ?? 'Unknown error'

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Something went wrong</div>
			<div className={styles.main}>{errorMessage}</div>
		</div>
	)
}
