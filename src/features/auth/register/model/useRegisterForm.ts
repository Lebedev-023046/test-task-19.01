import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema, type RegisterFormValues } from './register.schema'

export function useRegisterForm() {
	const { control, handleSubmit } = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			login: '',
			password: ''
		},
		mode: 'onSubmit'
	})

	const onSubmit = handleSubmit(async values => {
		console.log({ values })
	})

	return {
		control,
		onSubmit
	}
}
