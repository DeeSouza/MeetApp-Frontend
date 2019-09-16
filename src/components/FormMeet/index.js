import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Container } from './styles';
import { Button } from '../Button';

registerLocale('pt-BR', pt);

const schema = Yup.object().shape({
	title: Yup.string().required(),
	localization: Yup.string().required(),
	date: Yup.string().required(),
});

export default function FormMeet({ data }) {
	const [startDate, setStartDate] = useState(data.date);

	return (
		<Container>
			<Form initialData={data} schema={schema}>
				<Input name="title" placeholder="Título do Meetup" />
				<Input
					multiline
					name="description"
					placeholder="Descrição do Meetup"
				/>
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					locale="pt-BR"
					showTimeSelect
					timeFormat="p"
					timeIntervals={15}
					dateFormat="Pp"
				/>
				<Input
					name="localization"
					placeholder="Localização do Meetup"
				/>

				<Button info>
					<MdSave color="#FFf" size={16} />
					SALVAR MEETUP
				</Button>
			</Form>
		</Container>
	);
}

FormMeet.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		localization: PropTypes.string,
		date: PropTypes.instanceOf(Date),
	}).isRequired,
};
