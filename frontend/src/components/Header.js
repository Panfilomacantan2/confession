import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../logo.png';

const Header = () => {
	return (
		<HeaderTop>
			<Logo>
				<NavLink to="/">
					<img src={logo} alt="" />
				</NavLink>
			</Logo>
			<NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
				Home
			</NavLink>
			<NavLink to="/About" style={{ color: 'white', textDecoration: 'none' }}>
				About
			</NavLink>
			<NavLink to="/Lists" style={{ color: 'white', textDecoration: 'none' }}>
				List
			</NavLink>
		</HeaderTop>
	);
};

export default Header;

const HeaderTop = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	background-color: #293462;
	padding: 20px 60px;
	top: 0;
	position: fixed;
	z-index: 1;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

	a {
		color: white;
		text-decoration: none;
	}
`;

const Logo = styled.div`
	width: 40px;
	height: 40px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
