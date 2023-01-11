import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< Updated upstream
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes
import { fetchPetsAsync, selectPets } from './petsSlice';

const Pets = () => {
	const dispatch = useDispatch();
	const pets = useSelector(selectPets);
<<<<<<< Updated upstream
	useEffect(() => {
		dispatch(fetchPetsAsync());
	}, [dispatch]);

	return (
		<>
			<div className='petsContainer'>
				{pets.map((pet) => {
					return (
						<div key={pet.id} className='pets'>
							<p>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
							<button className='addCart'>Add to Cart</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

=======
	const navigate = useNavigate();

	const petClick = (id) => {
		navigate(`/pets/${id}`);
	};

	useEffect(() => {
		dispatch(fetchPetsAsync());
	}, [dispatch]);

	return (
		<>
			<div className='petsContainer'>
				{pets.map((pet) => {
					return (
						<div key={pet.id} className='pets' onClick={() => petClick(pet.id)}>
							<p>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
							<button className='addCart'>Add to Cart</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

>>>>>>> Stashed changes
export default Pets;
