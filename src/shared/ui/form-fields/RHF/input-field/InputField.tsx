import type { Control, FieldValues, Path } from 'react-hook-form'
import { useController } from 'react-hook-form'
import { BaseTextInput } from '../../base/base-text-field'

interface FormTextFieldProps<TFieldValues extends FieldValues> {
	control: Control<TFieldValues>
	name: Path<TFieldValues>
	label?: string
	placeholder?: string
	type?: React.HTMLInputTypeAttribute
	autoComplete?: 'current-password' | 'new-password' | 'username'
	disabled?: boolean
}

export function InputField<TFieldValues extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type = 'text',
	autoComplete,
	disabled
}: FormTextFieldProps<TFieldValues>) {
	const {
		field,
		fieldState: { error }
	} = useController({
		name,
		control
	})

	return (
		<BaseTextInput
			autoFocus
			{...field}
			type={type}
			label={label}
			placeholder={placeholder}
			disabled={disabled}
			errorText={error?.message}
			autoComplete={autoComplete}
		/>
	)
}
