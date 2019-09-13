import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	div {
		button {
			&:first-of-type {
				margin-left: auto;
				margin-right: 10px;
			}
		}
	}
`;

export const Details = styled.div`
	margin-top: 50px;

	div {
		&.image {
			height: 300px;
			overflow: hidden;
			border-radius: 5px;

			img {
				vertical-align: middle;
				width: 100%;
			}
		}

		&.description {
			margin-top: 18px;
			color: #fff;
			font-size: 16px;
		}

		&.info {
			padding: 0px 50px;
			color: rgba(255, 255, 255, 0.6);
			margin-top: 40px;

			strong {
				margin-left: 100px;
				font-weight: normal;
			}
		}
	}
`;
