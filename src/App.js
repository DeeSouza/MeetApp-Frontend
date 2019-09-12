import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Config Reactotron
import './config/ReactotronConfig';

// Routes with components
import Routes from './routes';
import history from './services/history';

import { store } from './store';

// Styles globals
import GlobalStyle from './styles/global';

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<GlobalStyle />
				<ToastContainer autoClose={3000} />
			</Router>
		</Provider>
	);
}

export default App;
