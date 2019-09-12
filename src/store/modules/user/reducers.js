import produce from 'immer';

const INITIAL_STATE = {
	profile: null,
	loading: false,
};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@user/CREATE_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@user/CREATE_SUCCESS': {
				draft.loading = false;
				break;
			}
			case '@user/CREATE_FAILURE': {
				draft.loading = false;
				break;
			}
			case '@auth/LOGIN_SUCCESS': {
				draft.profile = action.payload.user;
				break;
			}
			default:
		}
	});
}
