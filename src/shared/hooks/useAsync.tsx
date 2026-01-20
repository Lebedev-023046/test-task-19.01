import { useEffect, useState } from 'react'
import { sleep } from '../utils/sleep'

interface AsyncState<T> {
	data: T | null
	isLoading: boolean
	isError: boolean
	error: Error | null
}

interface Props {
	callback: () => Promise<any>
	delay?: number
	deps?: any
}

export const useAsync = <T,>({
	callback,
	delay = 0,
	deps = []
}: Props): AsyncState<T> => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				await sleep(delay)
				const data = await callback()
				setData(data)
			} catch (error) {
				setIsError(true)
				setError(error instanceof Error ? error : new Error(String(error)))
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, deps)

	return {
		data,
		isLoading,
		isError,
		error
	}
}
