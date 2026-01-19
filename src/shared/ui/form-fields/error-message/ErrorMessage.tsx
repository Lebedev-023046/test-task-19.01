import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
	isError: boolean
	message: string | undefined
}

export function ErrorMessage({ isError, message }: ErrorMessageProps) {
	if (!isError) return null
	return <p className={styles.errorText}>{message}</p>
}
