import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../assets/images/meetapp-logo.svg';

export default function Register() {
	const schema = Yup.object().shape({
		name: Yup.string().required('O campo nome é obrigatório.'),
		email: Yup.string()
			.required('O campo e-mail é obrigatório.')
			.email('Digite um e-mail válido.'),
		password: Yup.string()
			.min(6, 'A senha precisa ter no mínimo 6 caracteres.')
			.required('O campo senha é obrigatório.'),
	});

	function handleSubmitForm(data) {
		console.tron.log(data);
	}

	return (
		<>
			<img src={Logo} alt="MeetApp - Networking Infinite" />

			<Form
				autoComplete="off"
				onSubmit={handleSubmitForm}
				schema={schema}
			>
				<Input
					name="name"
					type="text"
					placeholder="Digite seu nome completo"
				/>
				<Input
					name="email"
					type="email"
					placeholder="Digite seu e-mail"
				/>
				<Input
					name="password"
					type="password"
					placeholder="Digite sua senha"
				/>

				<button type="submit">CRIAR</button>
				<Link to="/">JÁ TENHO UMA CONTA</Link>
			</Form>
		</>
	);
}
