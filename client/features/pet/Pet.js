import React, { useEffect} from 'react';
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
						<img src={pet.imageUrl} />
						<label>{`Name: ${pet.name}`}</label>
						<label>{`Price: $ ${pet.price}`}</label>
						<label>{`Type: ${pet.type}`}</label>
						<label>{`Breed: ${pet.breed}`}</label>
						<label>{`Weight: ${pet.weight} lbs.`}</label>
						<label>Description:</label>
						<p>{pet.description}</p>
				</div>
			) : (
				<p>Pet not found</p>
			)}
		</>
	);
};

export default Pet;
