import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserAsync, selectUser } from "./userSlice";
import { updatePetAsync } from "../pet/petSlice";
import { removeAccessorieAsync } from "../accesories/accessoriesSlice";

const User = () => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.auth.me)
  const { Id } = useParams()
  const [render, setRender] = useState(false)
  const user = useSelector(selectUser)

  const removePet = async (id, userId) => {
    await dispatch(updatePetAsync({id, userId}))
    setRender(!render)
  }

  const removeAccessorie = async (id, userId, accessorieId) => {
    await dispatch(removeAccessorieAsync({ id, userId, accessorieId }))
    setRender(!render)
  }

  useEffect(() => {
    dispatch(fetchUserAsync(Id))
  }, [dispatch, render])

  console.log(user)

  return (
    <>
    {test.privledge == 'admin' ? 
    <>
    <h1>Cart</h1>
    <h3>Pets</h3>
    {user.pets ? user.pets.map((pet) => {
      return(
        <ul>
        <li>{pet.name}</li>
        <li>{pet.price}</li>
        <button onClick={() => {removePet(pet.id, null)}}>Remove</button>
        </ul>
      )
    }) : null}
    <h3>Accessories</h3>
    {user.accessories ? user.accessories.map((pet) => {
      return(
        <ul>
        <li>{pet.name}</li>
        <li>{pet.price}</li>
        <button onClick={() => {removeAccessorie(pet.id, user.id, pet.id)}}>Remove</button>
        </ul>
      )
    }) : null} 
    <ul>
      {user.orders ? user.orders.map((order) => {
        return(
          <>
          <h3>Orders</h3>
          <li>Order ID: {order.id}</li>
          <li>Address: {order.address}</li>
          <li>Pets: {order.pets}</li>
          <li>Accessories: {order.accessories}</li>
          </>
        )
      }) : null}
      </ul>
    </>: null }
    </>
  )

}

export default User
