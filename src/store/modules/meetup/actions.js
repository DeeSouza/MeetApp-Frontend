export function meetUpdateRequest(meet, id) {
	return {
		type: '@meet/UPDATE_REQUEST',
		payload: { meet, id },
	};
}

export function meetUpdateSuccess(meet) {
	return {
		type: '@meet/UPDATE_SUCCESS',
		payload: { meet },
	};
}

export function meetUpdateFailure() {
	return {
		type: '@meet/UPDATE_FAILURE',
	};
}
