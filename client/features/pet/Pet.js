import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPetAsync, selectPet } from './petSlice';

const Pet = () => {
	const dispatch = useDispatch();
	const pet = useSelector(selectPet);
	const { Id } = useParams();

	useEffect(() => {
		dispatch(fetchPetAsync(Id));
	}, [dispatch]);

	return (
		<>
			{pet ? (
				<div className='singlePet'>
					<ul>
						<li>{pet.name}</li>
						<li>${pet.price}</li>
						<li>{pet.breed}</li>
						<li>{pet.weight}</li>
						<li>{pet.description}</li>
						<img src={pet.imageUrl} />
					</ul>
				</div>
			) : (
				<p>no pet</p>
			)}
		</>
	);
};

export default Pet;
