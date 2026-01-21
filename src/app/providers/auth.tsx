import { bootstrapAuth } from '@/features/auth'
import { useEffect, type PropsWithChildren } from 'react'

export function AuthProvider({ children }: PropsWithChildren) {
	useEffect(() => {
		bootstrapAuth()
	}, [])

	return <div>{children}</div>
}
