import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import { TitlePage } from '../../components/TitlePage';

export default function Dashboard() {
	return (
		<Container>
			<TitlePage>
				<h1>MEUS MEETUPS</h1>
				<button type="button">
					<MdAddCircleOutline color="#FFf" size={16} />
					NOVO MEETUP
				</button>
			</TitlePage>
		</Container>
	);
}
