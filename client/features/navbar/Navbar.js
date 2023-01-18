import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { Button } from '@mui/material'

const Navbar = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.me.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id = useSelector((state) => state.auth.me.id);
	const test = useSelector((state) => state.auth.me);
	const logoutAndRedirectHome = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<div>

			<nav className="navbar">
				{isLoggedIn ? (
					<ul>
						{/* The navbar will show these links after you log in */}
						<Link to='/home'>Home </Link>
						<Link to='/pets'>Pets</Link>
						<Link to='/accessories'>Accessories</Link>
						<Link to={`/cart`}>Cart</Link>
						{test.privledge == 'admin' ? <Link to={'/admin'}>Admin</Link> : null}
						<Button type='button' onClick={logoutAndRedirectHome}>


							Logout
						</Button>

					</ul>
				) : (
					<ul>
						{/* The navbar will show these links before you log in */}
						<Link to='/login'>Login</Link>
						<Link to='/signup'>Sign Up</Link>
					</ul>
				)}
			</nav>
			<hr />
		</div>
	);
};



export default Navbar;




