import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { authRepo } from '../../api/authRepo'
import { MOCKED_USER } from '../../config/mockedUser'
import { verifyUser } from '../../guard/verifyUser'
import { useAuthStore } from '../../model/auth.store'
import { loginSchema, type LoginFormValues } from './login.schema'

export function useLoginForm() {
	const { authenticate, unauthenticate } = useAuthStore()
	const [errorText, setErrorText] = useState('')

	const { control, handleSubmit } = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			login: '',
			password: ''
		},

		mode: 'onSubmit'
	})

	const onSubmit = handleSubmit(async values => {
		setErrorText('')
		try {
			const isValidUser = verifyUser({ payload: values, user: MOCKED_USER })

			if (!isValidUser) {
				setErrorText('Invalid Credentials')
				return
			}

			authRepo.login(values)
			authenticate()
		} catch (error) {
			console.error(error)
			unauthenticate()
		}
	})

	return {
		control,
		hasError: Boolean(errorText),
		errorText,
		onSubmit
	}
}
