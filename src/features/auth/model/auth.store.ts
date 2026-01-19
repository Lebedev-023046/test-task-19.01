// features/auth/model/auth.store.ts

import { create } from 'zustand'

type AuthStatus = 'unknown' | 'unauthenticated' | 'authenticated'

interface AuthState {
	status: AuthStatus
	authenticate(): void
	unauthenticate(): void
}

export const useAuthStore = create<AuthState>(set => ({
	status: 'unknown',

	authenticate: () => {
		set({ status: 'authenticated' })
	},

	unauthenticate: () => {
		set({ status: 'unauthenticated' })
	}
}))
