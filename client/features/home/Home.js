import React from 'react';
import { useSelector } from 'react-redux';
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
