import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Profile } from './styles';
import { logoutRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/images/meetapp-logo.svg';

export default function Header() {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user.profile);

	function handleLogout() {
		dispatch(logoutRequest());
	}

	return (
		<Container>
			<Wrapper>
				<Link to="/dashboard">
					<img src={logo} alt="Meetapp - Networking Infinite" />
				</Link>

				<Profile>
					<div>
						<strong>{profile.name}</strong>
						<Link to="/profile">MEU PERFIL</Link>
					</div>

					<button type="button" onClick={handleLogout}>
						SAIR
					</button>
				</Profile>
			</Wrapper>
		</Container>
	);
}
