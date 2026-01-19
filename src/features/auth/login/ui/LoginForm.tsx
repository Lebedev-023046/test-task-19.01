import { AuthFormShell } from '@/shared/ui/auth-form-shell'

import { ErrorMessage } from '@/shared/ui/form-fields/error-message'
import { InputField } from '@/shared/ui/form-fields/RHF/input-field'
import { LoginButton } from '../../controls/LoginButton'
import { useLoginForm } from '../model/useLoginForm'

export function LoginForm() {
	const { control, hasError, errorText, onSubmit } = useLoginForm()

	return (
		<AuthFormShell
			title='Auth'
			onSubmit={onSubmit}
			controls={
				<>
					<LoginButton isPending={false} />
				</>
			}
		>
			<InputField
				name='login'
				placeholder='login'
				autoComplete='username'
				control={control}
			/>
			<InputField
				type='password'
				name='password'
				placeholder='password'
				autoComplete='current-password'
				control={control}
			/>

			<ErrorMessage isError={hasError} message={errorText} />
		</AuthFormShell>
	)
}
