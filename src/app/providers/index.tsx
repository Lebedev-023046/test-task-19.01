import type { PropsWithChildren } from 'react'
import { AuthProvider } from './auth'

export function Providers({ children }: PropsWithChildren) {
	return <AuthProvider>{children}</AuthProvider>
}
