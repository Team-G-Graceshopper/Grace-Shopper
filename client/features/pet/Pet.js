import React, { useEffect } from 'react';
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

	useEffect(() => {
		if (pet.name) {
			setP(pet);
		}
	}, [pet]);

	return (
		<>
			<div className='singlePet'>
				<ul>
					<li>{p.name}</li>
					<li>${p.price}</li>
					<li>{p.breed}</li>
					<li>{p.weight}</li>
					<li>{p.description}</li>
					<img src={p.imageUrl} />
				</ul>
			</div>
		</>
	);
};

export default Pet;
