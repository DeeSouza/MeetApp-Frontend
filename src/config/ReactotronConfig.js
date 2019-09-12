import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
	const tron = Reactotron.configure({
		name: 'MeetApp',
		port: 3333,
		host: 'localhost',
	}).connect();

	tron.clear();

	console.tron = tron;
}
