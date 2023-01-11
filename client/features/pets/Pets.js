import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPetsAsync, selectPets } from "./petsSlice";
import { addCartAsync } from "../cart/cartSlice";
import { updatePetAsync } from "../pet/petSlice";

const Pets = () => {
  const dispatch = useDispatch()
  const pets = useSelector(selectPets)
  const navigate = useNavigate()
  const test = useSelector((state) => state.auth.me)
  console.log(test)
 
  const petClick = (id) => {
    navigate(`/pets/${id}`)
  }

  const addCartButton = (id, name, breed, type, description, imageUrl, price, weight, cartId) => {
    dispatch(updatePetAsync({id, name, breed, type ,description, imageUrl, price, weight, cartId}))
  }
 
  useEffect(() => {
    dispatch(fetchPetsAsync())
    if(!test.cart){
      dispatch(addCartAsync(test.id))
    }
  }, [dispatch])


return (
  <>
  <div className="petsContainer">
    {pets.map((pet) => {
      return <div className="pets"> 
      <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
      <button className="addCart" onClick={() => addCartButton(pet.id, pet.name, pet.breed, pet.type, pet.description, pet.imageUrl, pet.price, pet.weight, test.cart.id)}>Add to Cart</button>
      </div>
    })}
    </div>
  </>
)

}

export default Pets
