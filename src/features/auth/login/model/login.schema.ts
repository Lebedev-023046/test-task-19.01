// pages/auth/login/model/login.schema.ts
import { z } from 'zod'

export const loginSchema = z.object({
	login: z.string().min(3, 'Login must be at least 3 characters'),
	password: z.string().min(4, 'Password must be at least 4 characters')
})

export type LoginFormValues = z.infer<typeof loginSchema>
