import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { loginSuccess, loginFailure } from './actions';

export function* doLogin({ payload }) {
	const { email, password } = payload;

	try {
		// Call Sessions API for Login
		const response = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		// Call Action (PUT)
		yield put(loginSuccess(token, user));
	} catch (error) {
		// Call Action (PUT)
		yield put(loginFailure());
		toast.error('Whoops! E-mail e senha inválidos.');
	}
}

// Observers
export default all([takeLatest('@auth/LOGIN_REQUEST', doLogin)]);
