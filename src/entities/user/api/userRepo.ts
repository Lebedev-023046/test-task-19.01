import type { User } from './types'

export const userRepo = {
	getUser(): User | null {
		try {
			const raw = localStorage.getItem('user')
			if (!raw) return null
			return JSON.parse(raw)
		} catch (error) {
			throw error
		}
	}
}
