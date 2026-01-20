import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
	return (
		<div className={styles.wrapper}>
			<h1>Page not found</h1>
			<Link to='/' className={styles.link}>
				Ho Home
			</Link>
		</div>
	)
}
