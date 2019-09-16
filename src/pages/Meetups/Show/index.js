import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { MdEdit, MdDeleteForever, MdChevronLeft } from 'react-icons/md';
import { Container, Details } from './styles';
import { TitlePage } from '../../../components/TitlePage';
import { Button } from '../../../components/Button';
import Loading from '../../../components/Loading';
import api from '../../../services/api';

export default function Show({ match }) {
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

			data.date = format(
				parseISO(data.date),
				"d 'de' MMMM', às ' H'hs'",
				{ locale: pt }
			);

			setMeetup(data);
			setLoading(false);
		};

		loadDetailMeetup();
	}, [id]);

	return (
		<Container>
			<TitlePage>
				<h1>
					<Link to="/">
						<MdChevronLeft color="#FFF" size={28} />
					</Link>
					{meetup.title}
				</h1>
				<Button type="button" info>
					<MdEdit color="#FFf" size={16} />
					EDITAR
				</Button>
				<Button type="button" primary>
					<MdDeleteForever color="#FFf" size={16} />
					CANCELAR
				</Button>
			</TitlePage>

			{loading ? (
				<Loading />
			) : (
				<Details>
					{meetup.files && (
						<div className="image">
							<img src={meetup.files.url} alt={meetup.title} />
						</div>
					)}

					<div className="description">{meetup.description}</div>
					<div className="info">
						<time>{meetup.date}</time>
						<strong>{meetup.localization}</strong>
					</div>
				</Details>
			)}
		</Container>
	);
}

Show.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	}).isRequired,
};
