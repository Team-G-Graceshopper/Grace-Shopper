import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPetsAsync, selectPets } from "./petsSlice";
import { addCartAsync } from "../cart/cartSlice";
import { destroyPetAsync, updatePetAsync } from "../pet/petSlice";
import { Button } from '@mui/material'

const Pets = () => {
  const [render, setRender] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [petCart, setPetCart] = useState([])
  const dispatch = useDispatch()
  const pets = useSelector(selectPets)
  const navigate = useNavigate()
  const test = useSelector((state) => state.auth.me)
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const petClick = (id) => {
    navigate(`/pets/${id}`);
  };

  const addCartButton = (id, userId) => {
    dispatch(updatePetAsync({ id, userId }))
  }

  const addCartNoUser = (petObj) => {
    if(petCart){
      let ha = petCart
      ha.push(petObj)
      setPetCart(ha)
    localStorage.setItem("petCart", JSON.stringify(ha))
    }else{
      setPetCart([petObj])
      localStorage.setItem("petCart", JSON.stringify([petObj]))
    }
    
  }

  const deleteButton = async (id) => {
    await dispatch(destroyPetAsync(id))
    setRender(!render)
  }

  useEffect(() => {
    dispatch(fetchPetsAsync())
    const petCartArr = JSON.parse(localStorage.getItem("petCart"));
    setPetCart(petCartArr)
  }, [dispatch, render])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  return (
    <>
    <input type="text" placeholder="Search pets" onChange={handleSearch} />
    <div className="petsContainer">
      {filteredPets.map((pet) => {
        return <div className="pets"> 
        <img className="product-image" src={pet.imageUrl} />
        <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
        
        {isLoggedIn ? <Button className="addCart" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</Button> : <Button className="addCart" onClick={() => addCartNoUser(pet)}>Add to Cart</Button>}
     
        {test.privledge == 'admin' ? 
        <Button onClick={() => {deleteButton(pet.id)}}>Delete</Button>
        : null }
        </div>
      })}
      </div>
    </>
  )
}
export default Pets;
