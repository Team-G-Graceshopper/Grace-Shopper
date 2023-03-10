import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPetAsync, selectPet, updatePetAsync } from './petSlice';
import { Button } from '@mui/material'


const Pet = () => {
	const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [breed, setBreed] = useState('')
  const [weight, setWeight] = useState('')
  const [description, setDescription] = useState('')
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const pet = useSelector(selectPet)
  const { Id } = useParams()
  const test = useSelector((state) => state.auth.me)
  
  const petClick = (id) => {
    navigate(`/pets/${id}`);
  };

  const addCartButton = (id, userId) => {
    dispatch(updatePetAsync({ id, userId }))
  }

  const deleteButton = async (id) => {
    await dispatch(destroyPetAsync(id))
    setRender(!render)
  }


  const formSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updatePetAsync({id: Id, name, price, breed, weight, description}))
    setRender(render)
  }

	useEffect(() => {
		dispatch(fetchPetAsync(Id));
	}, [dispatch, render]);



  useEffect(() => {
    if (pet.name){
      setName(pet.name)
      setPrice(pet.price)
      setBreed(pet.breed)
      setWeight(pet.weight)
      setDescription(pet.description)
    }
  }, [pet])

	

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
      {test.privledge == 'admin' ?
      <form onSubmit={formSubmit}>
        <label>Pet Name:</label>
        <input name="petName" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Pet Price:</label>
        <input name="petPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Pet Breed:</label>
        <input name="petBreed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <label>Pet Weight:</label>
        <input name="petWeight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Pet Description:</label>
        <input name="petDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Update</button>
      </form> : null}
		</>
	);
};

export default Pet;



 

