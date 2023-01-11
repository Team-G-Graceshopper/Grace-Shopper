import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, me } from '../../app/store';

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
		<div>
			<h1>FS-App-Template</h1>
			<nav>
				{isLoggedIn ? (
					<div>
						{/* The navbar will show these links after you log in */}
						<Link to='/home'>Home </Link>
						<Link to='/pets'>Pets</Link>
        		<Link to={`/cart`}>Cart</Link> 
						<button type='button' onClick={logoutAndRedirectHome}>
							Logout
						</button>
					</div>
				) : (
					<div>
						{/* The navbar will show these links before you log in */}
						<Link to='/login'>Login</Link>
						<Link to='/signup'>Sign Up</Link>
					</div>
				)}
			</nav>
			<hr />
		</div>
	);
};

export default Navbar;
