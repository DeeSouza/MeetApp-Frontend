import React from 'react';
import { Switch } from 'react-router-dom';

// Routes with component
import Route from './Route';

// Páginas Autenticação e Registros
import Login from '../pages/Login';
import Register from '../pages/Register';

// Páginas User Logged
import Dashboard from '../pages/Dashboard';

// Páginas Meetup
import ShowMeetup from '../pages/Meetups/Show';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/register" component={Register} />

			<Route path="/dashboard" isPrivate component={Dashboard} />
			<Route path="/meetups/:id" isPrivate component={ShowMeetup} />
		</Switch>
	);
}
