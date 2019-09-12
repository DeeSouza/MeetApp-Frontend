import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/meetapp-logo.svg';

export default function Login() {
	/**
	 * Authentication user in platform
	 * @param {string} email
	 * @param {string} password
	 */
	function handleSubmitForm({ email, password }) {}

	return (
		<>
			<img src={Logo} alt="MeetApp - Network Infinite" />

			<Form autoComplete="off" onSubmit={handleSubmitForm}>
				<Input
					name="email"
					type="text"
					placeholder="Digite seu e-mail"
				/>
				<Input
					name="pass"
					type="password"
					placeholder="Digite sua senha"
				/>

				<button type="submit">ENTRAR</button>
				<Link to="/register">CRIAR CONTA GRATUITA</Link>
			</Form>
		</>
	);
}
