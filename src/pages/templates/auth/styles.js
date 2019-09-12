import styled from 'styled-components';
import { darken } from 'polished';
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

	img {
		transform: scale(1);
		transition: all 0.25s ease-in-out;

		&:hover {
			transform: scale(1.2);
		}
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 60px;
		transition: all 0.3s ease-in;
		animation: upForm 0.7s forwards;
		opacity: 0.5;

		@keyframes upForm {
			from {
				margin-top: 30px;
				opacity: 0;
			}
			to {
				margin-top: 60px;
				opacity: 1;
			}
		}

		input {
			background-color: rgba(0, 0, 0, 0.1);
			border-left: 0px solid rgba(0, 0, 0, 0.1);
			border: none;
			border-radius: 5px;
			padding: 0px 15px;
			color: #fff;
			margin-bottom: 10px;
			height: 50px;
			font-size: 15px;
			transition: all 0.25s ease-in;

			&:focus {
				border-left: 2px solid ${settings.primaryColor};
			}

			&::placeholder {
				color: rgba(255, 255, 255, 0.5);
			}
		}

		button {
			background-color: ${settings.primaryColor};
			height: 50px;
			transition: all 0.25s ease-out;
			color: #fff;
			border: none;
			border-radius: 5px;
			font-size: 15px;
			font-weight: bold;
			width: 100%;

			&:hover {
				background-color: ${darken(0.04, settings.primaryColor)};
			}
		}

		a {
			color: #fff;
			margin-top: 15px;
			opacity: 1;
			transition: all 0.25s ease-in;

			&:hover {
				opacity: 0.8;
			}
		}
	}
`;
