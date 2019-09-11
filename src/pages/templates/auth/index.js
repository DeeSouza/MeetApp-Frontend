import React from 'react';
import PropTypes from 'prop-types';
import { WrapperLayout, ContentWrapper } from './styles';

export default function AuthLayout({ children }) {
	return (
		<WrapperLayout>
			<ContentWrapper>{children}</ContentWrapper>
		</WrapperLayout>
	);
}

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
