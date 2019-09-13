import styled from 'styled-components';
import { darken } from 'polished';
import settings from '../../styles/variables';

export const TitlePage = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;

	h1 {
		color: #fff;
		font-size: 20px;
	}

	button {
		border: none;
		background-color: ${settings.primaryColor};
		padding: 0px 10px;
		color: #fff;
		height: 42px;
		border-radius: 5px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: background-color 0.25s ease-in-out;

		&:hover {
			background-color: ${darken(0.03, settings.primaryColor)};
		}

		svg {
			margin-right: 5px;
		}
	}
`;
