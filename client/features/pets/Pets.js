import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPetsAsync, selectPets } from './petsSlice';
import { addCartAsync } from '../cart/cartSlice';
import { updatePetAsync } from '../pet/petSlice';

const Pets = () => {
	const dispatch = useDispatch();
	const pets = useSelector(selectPets);
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.me);
	const [test, setTest] = useState(false);

	const petClick = (id) => {
		navigate(`/pets/${id}`);
	};

	const addCartButton = async (
		id,
		name,
		breed,
		type,
		description,
		imageUrl,
		price,
		weight,
		userId
	) => {
		await dispatch(
			updatePetAsync({
				id,
				name,
				breed,
				type,
				description,
				imageUrl,
				price,
				weight,
				userId,
			})
		);
		setTest(!test);
	};

	useEffect(() => {
		dispatch(fetchPetsAsync());
	}, [dispatch, test]);

	return (
		<>
			<div className='petsContainer'>
				{pets.map((pet) => {
					if (!pet.userId) {
						return (
							<div key={pet.id} className='pets'>
								<p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p>{' '}
								<p>{pet.breed} </p>
								<button
									className='addCart'
									onClick={() =>
										addCartButton(
											pet.id,
											pet.name,
											pet.breed,
											pet.type,
											pet.description,
											pet.imageUrl,
											pet.price,
											pet.weight,
											user.id
										)
									}>
									Add to Cart
								</button>
							</div>
						);
					}
					return null;
				})}
			</div>
		</>
	);
};



export default Pets;
