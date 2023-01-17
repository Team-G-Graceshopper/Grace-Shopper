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

 
  const petClick = (id) => {
    navigate(`/pets/${id}`)
  }

  const addCartButton = (id, userId) => {
    dispatch(updatePetAsync({id, userId}))
  }
 
  useEffect(() => {
    dispatch(fetchPetsAsync())
  }, [dispatch])


return (
  <>
  <div className="petsContainer">
    {pets.map((pet) => {
      return <div className="pets"> 
      <img className="petImg" src={pet.imageUrl} />
      <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
      <button className="addCart" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</button>
      </div>
    })}
    </div>
  </>
)

}

export default Pets
