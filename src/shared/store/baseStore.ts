export type Listener = () => void

export interface ExternalStore<T> {
	getSnapshot: () => T
	subscribe: (listener: Listener) => () => void
}

export function createStore<T>(initialSnapshot: T) {
	let snapshot = initialSnapshot
	const listeners = new Set<Listener>()

	return {
		getSnapshot: () => snapshot,

		subscribe(listener: Listener) {
			listeners.add(listener)
			return () => listeners.delete(listener)
		},

		setSnapshot(next: T) {
			snapshot = next
			listeners.forEach(l => l())
		}
	}
}
