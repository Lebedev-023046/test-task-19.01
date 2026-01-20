import type { stateClassMap } from './constants'

export type ButtonVariant = 'primary' | 'outlined'

export type Align = 'left' | 'center' | 'right'

export type StatefulVariant = keyof typeof stateClassMap

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	align?: Align
	active?: boolean
	variant?: ButtonVariant
	animation?: 'light-sweep' | 'none'
}
