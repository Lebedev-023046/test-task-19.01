import { AuthFormShell } from '@/shared/ui/auth-form-shell'

import { InputField } from '@/shared/ui/form-fields/RHF/input-field'
import { RegisterButton } from '../../controls/RegisterButton'
import { useRegisterForm } from '../model/useRegisterForm'

export function RegisterForm() {
	const { control, onSubmit } = useRegisterForm()

	return (
		<AuthFormShell
			title='Auth'
			onSubmit={onSubmit}
			controls={
				<>
					<RegisterButton isPending={false} />
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
		</AuthFormShell>
	)
}
