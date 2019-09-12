import React from 'react';
import PropTypes from 'prop-types';
import { WrapperLayout, ContentWrapper } from './styles';

export default function MasterLayout({ children }) {
	return (
		<WrapperLayout>
			<ContentWrapper>{children}</ContentWrapper>
		</WrapperLayout>
	);
}

MasterLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
