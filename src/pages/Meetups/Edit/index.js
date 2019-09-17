import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { parseISO } from 'date-fns';
import Loading from '../../../components/Loading';
import { TitlePage } from '../../../components/TitlePage';
import FormMeet from '../../../components/FormMeet';
import { Container } from './styles';

import api from '../../../services/api';

export default function Edit({ match }) {
	const [meetup, setMeetup] = useState({});
	const [loading, setLoading] = useState(false);
	const { id } = match.params;

	/**
	 * Show meetup details
	 */
	useEffect(() => {
		const loadDetailMeetup = async () => {
			setLoading(true);

			const response = await api.get(`/meetups/${id}`);
			const meet = response.data;

			meet.date = parseISO(meet.date);

			setMeetup(meet);
			setLoading(false);
		};

		loadDetailMeetup();
	}, [id]);

	function handleSubmit(data) {
		console.tron.log(data);
		console.tron.log(data.date);
	}

	return (
		<Container>
			<TitlePage>
				<h1>
					<Link to={`/meetups/${id}`}>
						<MdChevronLeft color="#FFF" size={28} />
					</Link>
					{meetup.title}
				</h1>
			</TitlePage>

			{loading ? (
				<Loading />
			) : (
				<FormMeet meet={meetup} onSubmit={handleSubmit} />
			)}
		</Container>
	);
}

Edit.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	}).isRequired,
};
