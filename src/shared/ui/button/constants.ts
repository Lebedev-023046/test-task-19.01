import styles from './Button.module.css'

export const stateClassMap = {
	chip: {
		active: styles.chipActive
	}
}

export const variantClassMap = {
	primary: styles.primary,
	outlined: styles.outlined
}

export const animationClassMap = {
	'light-sweep': styles.lightSweep,
	none: ''
}

export const alignClassMap = {
	left: styles.left,
	center: styles.center,
	right: styles.right
}
