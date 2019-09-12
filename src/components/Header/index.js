import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Profile } from './styles';

import logo from '../../assets/images/meetapp-logo.svg';

export default function Header() {
	const profile = useSelector(state => state.user.profile);

	return (
		<Container>
			<Wrapper>
				<Link to="/">
					<img src={logo} alt="Meetapp - Networking Infinite" />
				</Link>

				<Profile>
					<div>
						<strong>{profile.name}</strong>
						<Link to="/profile">MEU PERFIL</Link>
					</div>

					<button type="button">SAIR</button>
				</Profile>
			</Wrapper>
		</Container>
	);
}
