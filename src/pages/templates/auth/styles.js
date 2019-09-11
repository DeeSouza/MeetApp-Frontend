import styled from 'styled-components';
import { darken } from 'polished';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(0deg, #402845, #22202c);
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
		margin-top: 30px;

		input {
			background-color: rgba(0, 0, 0, 0.1);
			border: none;
			border-radius: 5px;
			padding: 0px 15px;
			color: #fff;
			margin-bottom: 10px;
			height: 50px;
			font-size: 15px;
			transition: all 0.25s ease-in;
			border-left: 0px solid rgba(0, 0, 0, 0.1);

			&:focus {
				border-left: 2px solid #f94d6a;
			}

			&::placeholder {
				color: rgba(255, 255, 255, 0.5);
			}
		}

		button {
			background-color: #f94d6a;
			height: 50px;
			transition: all 0.25s ease-out;
			color: #fff;
			border: none;
			border-radius: 5px;
			font-size: 15px;
			font-weight: bold;
			width: 100%;

			&:hover {
				background-color: ${darken(0.04, '#F94D6A')};
			}
		}
	}
`;
