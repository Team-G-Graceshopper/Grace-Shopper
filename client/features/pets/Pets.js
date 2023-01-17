import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPetsAsync, selectPets } from './petsSlice';
import { updatePetAsync } from '../pet/petSlice';
import { Button } from '@mui/material'

const Pets = () => {
    const dispatch = useDispatch();
    const pets = useSelector(selectPets);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.me);
    const [test, setTest] = useState(false);
    const [setState, setNewState] = useState("none")

    const petClick = (id) => {
        navigate(`/pets/${id}`);
    };

  const addCartButton = (id, userId) => {
    dispatch(updatePetAsync({id, userId}))
  }

  const sortMethod = {
    name: { method: (a, b) => a.name.localeCompare(b.name)}
	}
 
  useEffect(() => {
    dispatch(fetchPetsAsync())
  }, [dispatch])

  const handleSort = (e) => {
    e.preventDefault();
    setNewState(e.target.value)
  }

return (
  <>
    <select defaultValue={'DEFAULT'} onChange={handleSort}>
       <option value="name">Name</option>
                
                
            </select>
  
  <div className="petsContainer">
    {pets.map((pet) => {
      return <div className="pets"> 
      <img className="product-image" src={accessorie.imageUrl} />  
      <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
      <Button className="addCart" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</Button>
      </div>
    })}
    </div>
  </>
)
}
export default Pets;