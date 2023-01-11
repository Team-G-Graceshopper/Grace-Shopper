import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAsync } from '../cart/cartSlice';
import Pets from '../pets/Pets';

/**
 * COMPONENT
 */
const Home = (props) => {
	const username = useSelector((state) => state.auth.me.username);


	return (
		<div>
			<h3>Welcome, {username}</h3>
		</div>
	);
};

export default Home;
