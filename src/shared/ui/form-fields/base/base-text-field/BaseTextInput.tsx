import { useId, type InputHTMLAttributes } from 'react'
import { ErrorMessage } from '../../error-message'
import styles from './BaseTextInput.module.css'

interface BaseTextInputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'className'
> {
	label?: string
	errorText?: string

	autoComplete?: string
}

export function BaseTextInput({
	label,
	errorText,
	autoComplete,
	...rest
}: BaseTextInputProps) {
	const inputId = useId()

	const hasError = Boolean(errorText)

	return (
		<div className={`${styles.field}`}>
			{label && (
				<label htmlFor={inputId} className={`${styles.label}`}>
					{label}
				</label>
			)}

			<div className={`${styles.inputWrapper} ${hasError ? styles.error : ''}`}>
				<input
					id={inputId}
					autoComplete={autoComplete}
					className={`${styles.input}`}
					{...rest}
				/>
			</div>

			<ErrorMessage isError={hasError} message={errorText} />
		</div>
	)
}
