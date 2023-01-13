import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAccessorieAsync, fetchAccessoriesAsync, selectAccessories, updateAccessorieAsync } from "./accessoriesSlice";

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
            <p>{pet.name} </p>
            <button className="addCart" onClick={() => addCartClick(pet.id, test.id, pet.id)}>Add to Cart</button>
          </div>
          )
        })}
      </div>
    </>
  )

}

export default Accessories
