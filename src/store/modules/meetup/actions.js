// Actions Update
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

// Actions Cancel
export function meetCancelRequest(id) {
	return {
		type: '@meet/CANCEL_REQUEST',
		payload: { id },
	};
}

export function meetCancelSuccess() {
	return {
		type: '@meet/CANCEL_SUCCESS',
	};
}

export function meetCancelFailure() {
	return {
		type: '@meet/CANCEL_FAILURE',
	};
}
