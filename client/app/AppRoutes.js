import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Accessories from '../features/accesories/Accessories';
import AuthForm from '../features/auth/AuthForm';
import Cart from '../features/cart/Cart';
import Home from '../features/home/Home';
import Pet from '../features/pet/Pet';
import Pets from '../features/pets/Pets';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.me.id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(me());
	}, []);

	return (
		<div>
			{isLoggedIn ? (
				<Routes>
					<Route path='/*' element={<Home />} />
					<Route to='/home' element={<Home />} />
					<Route path='/pets' element={<Pets />} />
					<Route path='/pets/:Id' element={<Pet />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/accessories' element={<Accessories />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/*' element={<AuthForm name='login' displayName='Login' />} />
					<Route
						path='/login'
						element={<AuthForm name='login' displayName='Login' />}
					/>
					<Route
						path='/signup'
						element={<AuthForm name='signup' displayName='Sign Up' />}
					/>
				</Routes>
			)}
		</div>
	);
};

export default AppRoutes;
