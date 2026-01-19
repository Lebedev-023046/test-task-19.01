import styles from './Button.module.css'
import { alignClassMap, animationClassMap, variantClassMap } from './constants'
import type { ButtonProps } from './types'

export function Button({
	children,
	active = false,
	align = 'left',
	variant = 'primary',
	animation = 'light-sweep',
	...props
}: ButtonProps) {
	const { className, ...rest } = props

	const variantClass = variantClassMap[variant]
	const animationClass = animationClassMap[animation]
	const alignClass = alignClassMap[align]

	return (
		<button
			className={[
				styles.button,
				variantClass,
				animationClass,
				alignClass,
				className
			]
				.filter(Boolean)
				.join(' ')}
			{...rest}
		>
			{children}
		</button>
	)
}
