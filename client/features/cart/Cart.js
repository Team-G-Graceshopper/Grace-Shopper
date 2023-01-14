import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAsync, selectUser } from './cartSlice';
import  CartMessage  from "../cartmessage/CartMessage"

const Cart = () => {
	const dispatch = useDispatch();
	const me = useSelector((state) => state.auth.me);
	const user = useSelector(selectUser);

	useEffect(() => {
		dispatch(fetchUserAsync(me.id));
	}, [dispatch]);

	return (
		<>
			{user.pets
				? user.pets.map((pet) => {
						return <div key={pet.id}>{pet.name}</div>;
				  })
				: null}
				<CartMessage />
		</>
	);
};

export default Cart;
