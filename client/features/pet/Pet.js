import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPetAsync, selectPet } from './petSlice';
import { Button } from '@mui/material'


const Pet = () => {
	const dispatch = useDispatch();
	const pet = useSelector(selectPet);
	const { Id } = useParams();

	useEffect(() => {
		dispatch(fetchPetAsync(Id));
	}, [dispatch]);

	

	return (
		<>
			<div className="petsContainerSingle">
			<div className='singlePet'>
				<ul>
					<img className="single-product-image" src={pet.imageUrl} />
					<li>{pet.name}</li>
					<li>${pet.price}</li>
					<li>{pet.breed}</li>
					<li>{pet.weight}</li>
					<li>{pet.description}</li>
				</ul>
				<Button variant="contained" size="large" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</Button>
			</div>
			</div>
		</>
	);
};

export default Pet;