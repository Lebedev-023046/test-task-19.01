interface User {
	login: string
	password: string
}

interface Props {
	payload: User
	user: User
}

export function verifyUser({ payload, user }: Props): boolean {
	return payload.login === user.login && payload.password === user.password
}
