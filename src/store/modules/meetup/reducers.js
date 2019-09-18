import produce from 'immer';

const INITIAL_STATE = {
	loading: false,
};

export default function meet(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@meet/UPDATE_REQUEST':
				draft.loading = true;
				break;
			case '@meet/UPDATE_SUCCESS':
				draft.loading = false;
				break;
			case '@meet/UPDATE_FAILURE':
				draft.loading = false;
				break;
			default:
		}
	});
}
