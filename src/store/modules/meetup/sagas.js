import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { meetUpdateSuccess, meetUpdateFailure } from './actions';

export function* updateMeet({ payload }) {
	try {
		const response = yield call(
			api.put,
			`meetups/${payload.id}`,
			payload.meet
		);

		toast.success('Yeeah! MeetUp atualizado com sucesso!');

		yield put(meetUpdateSuccess(response));
	} catch (error) {
		// Call Action (PUT)
		yield put(meetUpdateFailure());

		// Alert
		toast.error(error.response.data.error);
	}
}

// Observers
export default all([takeLatest('@meet/UPDATE_REQUEST', updateMeet)]);
