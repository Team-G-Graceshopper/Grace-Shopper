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
		<select defaultValue={'DEFAULT'} onChange={handleSort}>
        <option value="DEFAULT" disabled>None</option>
        <option value="leastToGreatest">Least to Greatest</option>
        <option value="greatestToLeast">Greatest to Least</option>
      </select>
			<div className='singlePet'>
				<ul>
					<img src={pet.imageUrl} />
					<li>{pet.name}</li>
					<li>${pet.price}</li>
					<li>{pet.breed}</li>
					<li>{pet.weight}</li>
					<li>{pet.description}</li>
				</ul>
			</div>
		</>
	);
};

export default Pet;