import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCartAsync, fetchUserAsync, selectCart, selectUser } from "./cartSlice";
import { updatePetAsync } from "../pet/petSlice";
import { removeAccessorieAsync, updateAccessorieAsync, updateAccessorieQuantityAsync } from "../accesories/accessoriesSlice";
import { fetchCartAccessoriesAsync, selectCartAccessories } from "./cartAcessoriesSlice";


const Cart = () => {  
  const dispatch = useDispatch()
  const test = useSelector((state => state.auth.me))
  const user = useSelector(selectUser)
  const [qty, setQty] = useState(false)


  const addQuantity = async (id, quantity, userId, accessorieId) => {
    await dispatch(updateAccessorieQuantityAsync({id, quantity, userId, accessorieId}))
    setQty(!qty)
  }

  const subtractQuantity = async (id, quantity, userId, accessorieId) => {
    if(quantity > 0){
    await dispatch(updateAccessorieQuantityAsync({id, quantity, userId, accessorieId}))
    setQty(!qty)
    }
  }

  const removePetFromCart = async (id, userId) => {
    await dispatch(updatePetAsync({id, userId}))
    setQty(!qty)
  }

  const removeAccessorieFromCart =  async (id, userId, accessorieId) => {
    await dispatch(removeAccessorieAsync({ id, userId, accessorieId }))
    setQty(!qty)
  }

  useEffect(() => {
    dispatch(fetchUserAsync(test.id))
    dispatch(fetchCartAccessoriesAsync(test.id))
  }, [dispatch, qty])

  return (
    <>
    <h1>Pets</h1>
    {user.pets ? Object.entries(user.pets).sort((a,b) => {
    if(a[1].name < b[1].name){
      return -1
    }
  }).map((pet) => {
    return(
      <div className="cartPets">
      <div>{pet[1].name}</div>
      <button onClick={() => {removePetFromCart(pet[1].id, null)}}> remove </button>
      </div>
    )
  }): null}
    <h1>Accessories</h1>
  {user.accessories ? user.accessories.map((pet) => {
    return(
      <div className="cartAccessories">
      <div>{pet.name} {pet.UserAccessories.quantity}</div>
      <button onClick={() => {addQuantity(pet.id, pet.UserAccessories.quantity + 1, test.id, pet.id)}}> + </button>
      <button onClick={() => {subtractQuantity(pet.id, pet.UserAccessories.quantity - 1, test.id, pet.id)}}> - </button>
      <button onClick={() => {removeAccessorieFromCart(pet.id, test.id, pet.id)}}> remove </button>
      </div>
    )
  }): null}
    </>
  )

}

export default Cart
