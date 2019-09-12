import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/meetapp-logo.svg';

export default function Register() {
	return (
		<>
			<img src={Logo} alt="MeetApp" />

			<Form autoComplete="off">
				<Input
					name="name"
					type="text"
					placeholder="Digite seu nome completo"
				/>
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

				<button type="button">CRIAR</button>
				<Link to="/">JÁ TENHO UMA CONTA</Link>
			</Form>
		</>
	);
}
