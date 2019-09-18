import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
	meetUpdateSuccess,
	meetUpdateFailure,
	meetCancelSuccess,
	meetCancelFailure,
} from './actions';

/**
 * Update meetup
 * @param {object} payload Data from meet
 */
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

export function* cancelMeet({ payload }) {
	try {
		yield call(api.delete, `meetups/${payload.id}`);

		toast.success('Yeeah! MeetUp cancelado com sucesso!');

		yield put(meetCancelSuccess());
	} catch (error) {
		// Call Action (PUT)
		yield put(meetCancelFailure());

		// Alert
		toast.error(error.response.data.error);
	}
}

// Observers
export default all([takeLatest('@meet/UPDATE_REQUEST', updateMeet)]);
