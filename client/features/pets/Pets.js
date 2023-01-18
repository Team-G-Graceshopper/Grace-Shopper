import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPetsAsync, selectPets } from "./petsSlice";
import { addCartAsync } from "../cart/cartSlice";
import { destroyPetAsync, updatePetAsync } from "../pet/petSlice";
import { Button, TextField } from '@mui/material'

const Pets = () => {
  const pets = useSelector(selectPets)
  // useState() for search filter
  const [petsData, setPetsData] = useState([]);
  const [name, setName] = useState("")

  const [render, setRender] = useState(false)


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const test = useSelector((state) => state.auth.me)

  React.useEffect(() => {
    dispatch(fetchPetsAsync())
    // setPetsData(pets);
  }, [dispatch])


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
 



  const handleSearch = () => {
    console.log("search button clicked!");
    const newData = petsData.filter((pet) => pet.name.toLowerCase().includes(name.toLowerCase()))
    setPetsData(newData)
  }

 
  return (
    <>
      <div>
        <TextField type='text' placeholder='Search product...' onChange={(e)=> setName(e.target.value) }/>
        <Button variant='contained' onClick={()=> handleSearch()}>Search</Button>
      </div>
      <div className="petsContainer">
        {pets.map((pet) => {
          return <div className="pets"> 

          <img className="product-image" src={pet.imageUrl} />
          <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
          <Button className="addCart" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</Button>
          {test.privledge == 'admin' ? 
          <Button variant="contained" onClick={() => {deleteButton(pet.id)}}>Delete</Button>
          : null }
          </div>
        })}
        </div>
    </>
  )
}
export default Pets;