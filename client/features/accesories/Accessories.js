import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAccessorieAsync, fetchAccessoriesAsync, selectAccessories, updateAccessorieAsync } from "./accessoriesSlice";
import { Button } from '@mui/material'

import { useParams } from 'react-router-dom'

const Accessories = () => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const accessories = useSelector(selectAccessories)
  const test = useSelector((state) => state.auth.me)
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);


  let accCartArr = []
  const addCartNoUser = (accObj) => {
    accCartArr.push(accObj)
    localStorage.setItem("accCart", JSON.stringify(accCartArr))
  }


  const deleteButton = async (id) => {
    await dispatch(destoryAccessorieAsync(id))
    setRender(!render)
  }

  const addCartClick = (id, userId, accessorieId) => {
    dispatch(addAccessorieAsync({ id, userId, accessorieId }))
  }

  useEffect(() => {
    dispatch(fetchAccessoriesAsync())
  }, [dispatch, render])


  return (
    <>
      <div className="petsContainer">
        {accessories.map((pet) => {
          return (
            
            <div className="pets">
            <img className="product-image" src={pet.imageUrl} />
            <Link to={`/accessories/${pet.id}`}>{pet.name}</Link>
            <p>{pet.price}</p>
            {isLoggedIn ? <Button className="addCart" onClick={() => addCartClick(pet.id, test.id, pet.id)}>Add to Cart</Button> : <Button className="addCart" onClick={() => addCartNoUser(pet)}>Add to Cart</Button> }
            {test.privledge == 'admin' ? 
            <button onClick={() => {deleteButton(pet.id)}}>Delete</button>
            : null }
          </div>
          )
        })}
      </div>
    </>
  )

}

export default Accessories
