import produce from 'immer';

const INITIAL_STATE = {
	token: null,
	signed: false,
	loading: false,
};

export default function login(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/LOGIN_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@auth/LOGIN_FAILURE': {
				draft.loading = false;
				break;
			}
			default:
		}
	});
}
