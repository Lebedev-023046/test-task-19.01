import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster
				position='bottom-right'
				toastOptions={{
					style: {
						fontSize: '1.8rem',
						padding: '1rem 2rem',
						borderRadius: 'var(--rounded-md)'
					}
				}}
			/>
		</>
	)
}
