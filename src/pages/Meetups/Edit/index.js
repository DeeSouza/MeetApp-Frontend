import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { zonedTimeToUtc } from 'date-fns-tz';
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
			const { data } = response;

			data.date = zonedTimeToUtc(data.date, 'America/Sao_Paulo');

			setMeetup(data);
			setLoading(false);
		};

		loadDetailMeetup();
	}, [id]);

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

			{loading ? <Loading /> : <FormMeet meet={meetup} />}
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
