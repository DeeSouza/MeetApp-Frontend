import React from 'react';
import { PropTypes } from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import * as Yup from 'yup';
import { Container } from './styles';
import { Button } from '../Button';
import CoverInput from '../CoverInput';
import DatePicker from '../DatePicker';

const schema = Yup.object().shape({
	title: Yup.string().required('Esse campo é obrigatório.'),
	file_id: Yup.string().required('Esse campo é obrigatório.'),
	localization: Yup.string().required('Esse campo é obrigatório.'),
	description: Yup.string().required('Esse campo é obrigatório.'),
	date: Yup.string().required('Esse campo é obrigatório.'),
});

export default function FormMeet({ meet }) {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<Container>
			<Form initialData={meet} schema={schema} onSubmit={handleSubmit}>
				<CoverInput name="file_id" />

				<Input name="title" placeholder="Título do Meetup" />

				<Input
					multiline
					name="description"
					placeholder="Descrição do Meetup"
				/>

				<DatePicker name="date" />

				<Input
					name="localization"
					placeholder="Localização do Meetup"
				/>

				<Button info type="submit">
					<MdSave color="#FFf" size={16} />
					SALVAR MEETUP
				</Button>
			</Form>
		</Container>
	);
}

FormMeet.propTypes = {
	meet: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		localization: PropTypes.string,
		date: PropTypes.instanceOf(Date),
	}).isRequired,
};
