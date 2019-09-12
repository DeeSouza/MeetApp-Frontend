import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import { WrapperLayout, ContentWrapper } from './styles';

export default function MasterLayout({ children }) {
	return (
		<WrapperLayout>
			<ContentWrapper>
				<Header />

				{children}
			</ContentWrapper>
		</WrapperLayout>
	);
}

MasterLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
