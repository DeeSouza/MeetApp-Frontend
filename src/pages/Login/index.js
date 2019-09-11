import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import Logo from '../../assets/images/meetapp-logo.svg';

export default function Login() {
	return (
		<>
			<img src={Logo} alt="MeetApp" />

			<Form autoComplete="off">
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

				<button type="button">ENTRAR</button>
			</Form>
		</>
	);
}
