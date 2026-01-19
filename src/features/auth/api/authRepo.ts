// нужно хэшировать пароли и не хранить их в общем виде, но для тестового примера оставлю как есть

interface LoginPayload {
	login: string
	password: string
}

export const authRepo = {
	login(payload: LoginPayload) {
		try {
			localStorage.setItem('user', JSON.stringify(payload))
		} catch (error) {
			throw error
		}
	},
	logout() {
		try {
			localStorage.removeItem('user')
		} catch (error) {
			throw error
		}
	}
}
