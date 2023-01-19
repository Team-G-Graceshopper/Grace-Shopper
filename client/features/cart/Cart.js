import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCartAsync, fetchUserAsync, selectCart, selectUser } from "./cartSlice";
import { updatePetAsync } from "../pet/petSlice";
import { removeAccessorieAsync, updateAccessorieAsync, updateAccessorieQuantityAsync } from "../accesories/accessoriesSlice";
import { fetchCartAccessoriesAsync, selectCartAccessories } from "./cartAcessoriesSlice";
import  CartMessage  from "../cartmessage/CartMessage"
import { Button } from '@mui/material'
import { addOrderAsync, fetchOrdersAsync, selectOrders } from "./orderSlice";

const Cart = () => {  
  const [address, setAddress] = useState('')
  const [petCart, setPetCart] = useState([])
  const [accCart, setAccCart] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const test = useSelector((state => state.auth.me))
  const user = useSelector(selectUser)
  const [qty, setQty] = useState(false)
  const or = useState(selectOrders)
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  


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

  const formSubmit = async (e) => {
    e.preventDefault()
    let p = []
    user.pets.map((pet) => {
      p.push(pet.name)
    })
    let a = []
    user.accessories.map((accessorie) => {
      let ha = accessorie.name + accessorie.UserAccessories.quantity
      a.push(ha)
    })
    dispatch(addOrderAsync({address, pets: p.join(', '), accessories: a.join(', '), userId: test.id}))
    navigate('/thankyou')
  }

  useEffect(() => {
    if(isLoggedIn){
    dispatch(fetchUserAsync(test.id))
    dispatch(fetchCartAccessoriesAsync(test.id))
    dispatch(fetchOrdersAsync())
    }else {
      const petCartArr = JSON.parse(localStorage.getItem("petCart"));
      const accCartArr = JSON.parse(localStorage.getItem('accCart'))
      setPetCart(petCartArr)
      setAccCart(accCartArr)
    }
  }, [dispatch, qty])



  return (
    <>
    <h1>Your Pets: </h1>
    <div className="cartContainer">
    <div className="cartItems">
    <h1>Pets</h1>
    {user.pets ? Object.entries(user.pets).sort((a,b) => {
    if(a[1].name < b[1].name){
      return -1
    }
  }).map((pet) => {
    return(
      <div className="cartPets">
      <div>{pet[1].name}</div>
      <Button variant="contained"  onClick={() => {removePetFromCart(pet[1].id, null)}}> remove </Button >
      </div>
    )
  }): null}
    <h1>Your Accessories: </h1>
  {user.accessories ? user.accessories.map((pet) => {
    return(
      <div className="cartAccessories">
      <div>{pet.name} {pet.UserAccessories.quantity}</div>
      <Button variant="contained" onClick={() => {addQuantity(pet.id, pet.UserAccessories.quantity + 1, test.id, pet.id)}}> + </Button >
      <Button variant="contained" onClick={() => {subtractQuantity(pet.id, pet.UserAccessories.quantity - 1, test.id, pet.id)}}> - </Button >
      <Button variant="contained" onClick={() => {removeAccessorieFromCart(pet.id, test.id, pet.id)}}> remove </Button>
      </div>
    )
  }): null}
  </div>

  <form onSubmit={formSubmit}>
    <label>Shipping Address:</label>
    <input name="shippingAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
    <button type="submit">Order</button>
  </form>
  </div> 

  <CartMessage />
  </>
  )

}

export default Cart
