import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	fetchCartAsync,
	fetchUserAsync,
	selectCart,
	selectUser,
} from './cartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const test = useSelector((state) => state.auth.me);
	const user = useSelector(selectUser);

	useEffect(() => {
		dispatch(fetchUserAsync(test.id));
	}, [dispatch]);

	console.log(user.pets);

	return (
		<>
			{user.pets
				? user.pets.map((p) => {
						return <div key={p.id}>{p.name}</div>;
				  })
				: null}
		</>
	);
};

export default Cart;
