import { LogoutButton } from '@/features/auth'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export function Header() {
	return (
		<header className={styles.headerWrapper}>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Link className={styles.title} to='/'>
						Test App
					</Link>
				</div>
				<div className={styles.controls}>
					<LogoutButton />
				</div>
			</div>
		</header>
	)
}
