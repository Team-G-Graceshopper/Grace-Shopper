import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAccessorieAsync, destoryAccessorieAsync, fetchAccessoriesAsync, selectAccessories, updateAccessorieAsync } from "./accessoriesSlice";
import { useParams } from 'react-router-dom'

const Accessories = () => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const accessories = useSelector(selectAccessories)
  const test = useSelector((state) => state.auth.me)


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
            <Link to={`/accessories/${pet.id}`}>{pet.name}</Link>
            <p>{pet.price}</p>
            <button className="addCart" onClick={() => addCartClick(pet.id, test.id, pet.id)}>Add to Cart</button>
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
