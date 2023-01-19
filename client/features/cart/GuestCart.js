import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCartAsync, fetchUserAsync, selectCart, selectUser } from "./cartSlice";
import { updatePetAsync } from "../pet/petSlice";
import { removeAccessorieAsync, updateAccessorieAsync, updateAccessorieQuantityAsync } from "../accesories/accessoriesSlice";
import { fetchCartAccessoriesAsync, selectCartAccessories } from "./cartAcessoriesSlice";
import CartMessage from "../cartmessage/CartMessage"
import { addOrderAsync, fetchOrdersAsync, selectOrders } from "./orderSlice";

const GuestCart = () => {
  const [address, setAddress] = useState('')
  const [petCart, setPetCart] = useState([])
  const [accCart, setAccCart] = useState([])
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const test = useSelector((state => state.auth.me))
  const user = useSelector(selectUser)
  const [qty, setQty] = useState(false)
  // const or = useState(selectOrders)
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const formSubmit = async (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/thankyou')
  }


    const removeButtonPet = (r) => {
      let a = petCart.filter((a) => {
        return a.id != r.id
      })
      setPetCart(a)
      localStorage.setItem("petCart", JSON.stringify(a))
    }

    const removeButtonAcc = (r) => {
      let a = accCart.filter((a) => {
        return a.id != r.id
      })
      setAccCart(a)
      localStorage.setItem("accCart", JSON.stringify(a))
    }



  useEffect(() => {
    const petCartArr = JSON.parse(localStorage.getItem("petCart"));
    const accCartArr = JSON.parse(localStorage.getItem('accCart'))
    setPetCart(petCartArr)
    setAccCart(accCartArr)

  }, [])

  return (
    <>
      <div className="cartContainer">
        <div className="cartItems">
          <h1>Pets</h1>
          {petCart ? petCart.map((pet) => {
            return (
              <div className="cartPets">
                <div>{pet.name}</div>
                <button onClick={() => {removeButtonPet(pet)}}>Remove</button>
              </div>
            )
          }): null}
          <h1>Accessories</h1>
          {accCart ? accCart.map((accessorie) => {
            return (
              <div className="cartAccessories">
                <div>{accessorie.name}</div>
                <button onClick={() => {removeButtonAcc(accessorie)}}>Remove</button>
              </div>
            )
          }) : null}
        </div>
        <form onSubmit={formSubmit}>
    <label>Shipping Address:</label>
    <input name="shippingAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
    <button type="submit">Order</button>
  </form>
      </div>
      
    </>
  )


}

export default GuestCart
