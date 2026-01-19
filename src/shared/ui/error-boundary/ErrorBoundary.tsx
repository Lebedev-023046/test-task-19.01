import React from 'react'
import styles from './ErrorBoundary.module.css'

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: (error: Error | null) => React.ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback(this.state.error)
			}

			return (
				<div className={styles.errorBoundary}>
					<h2>Something went wrong.</h2>
					<p>{this.state.error?.message}</p>
				</div>
			)
		}

		return this.props.children
	}
}
