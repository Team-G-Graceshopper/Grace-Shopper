import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAccessorieAsync, fetchAccessoriesAsync, selectAccessories, updateAccessorieAsync } from "./accessoriesSlice";
import { Button } from '@mui/material'

const Accessories = () => {
  const dispatch = useDispatch()
  const accessories = useSelector(selectAccessories)
  const test = useSelector((state) => state.auth.me)

  const addCartClick = (id, userId, accessorieId) => {
    dispatch(addAccessorieAsync({ id, userId, accessorieId }))
  }

  useEffect(() => {
    dispatch(fetchAccessoriesAsync())
  }, [dispatch])


  return (
    <>
      <div className="petsContainer">
        {accessories.map((pet) => {
          return (
            
            <div className="pets">
              <img className="product-image" src={pet.imageUrl} /> 
            <p>{pet.name} </p>
            <Button className="addCart" onClick={() => addCartClick(pet.id, test.id, pet.id)}>Add to Cart</Button>
          </div>
          )
        })}
      </div>
    </>
  )

}

export default Accessories
