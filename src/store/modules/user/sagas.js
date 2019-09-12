import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { createUserSuccess, createUserFailure } from './actions';

export function* createUser({ payload }) {
	try {
		const { name, email, password } = payload;

		yield call(api.post, 'users', {
			name,
			email,
			password,
		});

		toast.success('Yeeah! Conta criada com sucesso! Faça o login.');

		yield put(createUserSuccess());

		history.push('/');
	} catch (err) {
		toast.error('Whoops! Houve uma falha. Verifique seus dados!');

		yield put(createUserFailure());
	}
}

// Observers
export default all([takeLatest('@user/CREATE_REQUEST', createUser)]);
