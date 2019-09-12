import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
	const tron = Reactotron.configure({
		name: 'MeetApp',
		port: 3333,
		host: 'localhost',
	})
		.use(reactotronRedux())
		.use(reactotronSaga())
		.connect();

	tron.clear();

	console.tron = tron;
}
