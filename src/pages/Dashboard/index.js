import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, ListMeet, Meet } from './styles';
import { TitlePage } from '../../components/TitlePage';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Dashboard() {
	const [meetups, setMeetups] = useState([]);
	const [loading, setLoading] = useState(false);

	/**
	 * Get meetups from user logged is owner
	 */
	useEffect(() => {
		setLoading(true);

		async function loadMeetups() {
			const response = await api.get('users/meetups_owner');

			const data = response.data.map(meet => {
				return {
					...meet,
					date: format(
						parseISO(meet.date),
						"d 'de' MMMM', às ' H'hs'",
						{ locale: pt }
					),
				};
			});

			setMeetups(data);
			setLoading(false);
		}

		loadMeetups();
	}, []);

	return (
		<Container>
			<TitlePage>
				<h1>MEUS MEETUPS</h1>
				<button type="button">
					<MdAddCircleOutline color="#FFf" size={16} />
					NOVO MEETUP
				</button>
			</TitlePage>

			{loading ? (
				<Loading />
			) : (
				<ListMeet>
					{meetups.map(meet => (
						<Meet key={String(meet.id)}>
							<Link to={`/meetups/${meet.id}`}>
								<strong>{meet.title}</strong>
								<time>{meet.date}</time>
								<MdChevronRight color="#FFF" size={20} />
							</Link>
						</Meet>
					))}
				</ListMeet>
			)}
		</Container>
	);
}
