import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCartAsync, selectCart } from './cartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const { Id } = useParams();
	const cart = useSelector(selectCart);

	useEffect(() => {
		dispatch(fetchCartAsync(Id));
	}, [dispatch]);

	console.log(cart);

	return (
		<>
			{cart
				? cart.map((pet) => {
						return <div key={pet.id}>{pet.name}</div>;
				  })
				: null}
		</>
	);
};

export default Cart;
