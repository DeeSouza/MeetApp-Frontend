import styled from 'styled-components';
import settings from '../../../styles/variables';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		0deg,
		${settings.linearGradientPrimary},
		${settings.linearGradiendSecondary}
	);
	height: 100%;
`;

export const ContentWrapper = styled.div`
	width: 90%;
	max-width: 315px;
	text-align: center;
`;
