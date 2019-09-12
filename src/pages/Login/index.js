import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../assets/images/meetapp-logo.svg';

export default function Login() {
	const schema = Yup.object().shape({
		email: Yup.string()
			.required('O campo e-mail é obrigatório.')
			.email('Digite um e-mail válido.'),
		password: Yup.string().required('O campo senha é obrigatório.'),
	});

	/**
	 * Authentication user in platform
	 * @param {string} email
	 * @param {string} password
	 */
	function handleSubmitForm({ email, password }) {
		console.tron.log(email, password);
	}

	return (
		<>
			<img src={Logo} alt="MeetApp - Network Infinite" />

			<Form
				autoComplete="off"
				onSubmit={handleSubmitForm}
				schema={schema}
			>
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

				<button type="submit">ENTRAR</button>
				<Link to="/register">CRIAR CONTA GRATUITA</Link>
			</Form>
		</>
	);
}
