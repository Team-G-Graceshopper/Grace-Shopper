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

  const accessorieClick = (id) => {
    navigate(`/accessories/${id}`);
  };

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
        {accessories.map((accessorie) => {
          return (
            
            <div className="pets">
            <img className="product-image" src={accessorie.imageUrl} />
            <Link to={`/accessories/${accessorie.id}`}>{accessorie.name}</Link>
            <p>{accessorie.price}</p>
            <Button className="addCart" onClick={() => addCartClick(accessorie.id, test.id, accessorie.id)}>Add to Cart</Button>
            {test.privledge == 'admin' ? 
            <button onClick={() => {deleteButton(accessorie.id)}}>Delete</button>
            : null }
          </div>
          )
        })}
      </div>
    </>
  )

}

export default Accessories
