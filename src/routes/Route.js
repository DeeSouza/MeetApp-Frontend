import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Templates
import AuthLayout from '../pages/templates/auth';
import MasterLayout from '../pages/templates/master';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	// Control if user is checked
	const { signed } = false;

	// Template
	const Layout = signed ? MasterLayout : AuthLayout;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
};
