import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import styled from "styled-components";

const Navbar = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.me.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id = useSelector((state) => state.auth.me.id)
	const test = useSelector((state) => state.auth.me)
	const logoutAndRedirectHome = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<Navbars>
			<H1>World of Pets</H1>
			<nav>
				{isLoggedIn ? (
					<Ul>
						{/* The navbar will show these links after you log in */}
						<Li className="nav-item">
						<NavLinks to='/home' className="nav-link">
							Home
							</NavLinks>
						</Li>
						<Li className="nav-item">
						<NavLinks to='/pets' className="nav-link">
							Pets
							</NavLinks>
						</Li>
						<Li className="nav-item">
                        <NavLinks to='/cart'className="nav-link">
							Cart
							</NavLinks>
						</Li>
						<Li className="nav-item">
						<button type='button' className="nav-link" onClick={logoutAndRedirectHome}>
							Logout
						</button>
						</Li>
					</Ul>
				) : (
					<Ul>
						{/* The navbar will show these links before you log in */}
						<NavLinks to='/login'>Login</NavLinks>
						<NavLinks to='/signup'>Sign Up</NavLinks>
					</Ul>
				)}
			</nav>
			<hr />
		</Navbars>
	);
};


const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: blanchedalmond;
  height: 100%;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
`;

export const Navbars = styled.nav`
  width: 100%;
  height: 90px;
  background: aqua;
  display: flex;
  justify-content: flex-end;
`;

export const Ul = styled.ul`
  padding: 0px 30px;
  height: 100%;
  width: 600px;
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: blanchedalmond;
  height: 100%;
  width: 150px;
  a {
    &:hover {
      background: rgb(202, 202, 202);
      color: rgb(66, 66, 66);
    }
  }
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  height: 100%;
  width: 600px;
  display: flex;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: blueviolet;
  font-size: 3.5em
  
 
 
`;


export default Navbar;




