export function createUserRequest(name, email, password) {
	return {
		type: '@user/CREATE_REQUEST',
		payload: {
			name,
			email,
			password,
		},
	};
}

export function createUserSuccess() {
	return {
		type: '@user/CREATE_SUCCESS',
	};
}

export function createUserFailure() {
	return {
		type: '@user/CREATE_FAILURE',
	};
}
