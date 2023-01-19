import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAccessorieAsync, fetchAccessoriesAsync, selectAccessories, updateAccessorieAsync } from "./accessoriesSlice";
import { Button } from '@mui/material'

import { useParams } from 'react-router-dom'

const Accessories = () => {
  const [render, setRender] = useState(false)
  const [accCart, setAccCart] = useState([])
  const dispatch = useDispatch()
  const accessories = useSelector(selectAccessories)
  const test = useSelector((state) => state.auth.me)
  const [searchQuery, setSearchQuery] = useState("");
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);


  const addCartNoUser = (accObj) => {
    if(accCart){
      let ha = accCart
      ha.push(accObj)
      setAccCart(ha)
    localStorage.setItem("accCart", JSON.stringify(ha))
    }else{
      setAccCart([accObj])
      localStorage.setItem("accCart", JSON.stringify([accObj]))
    }
    
  }

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
    const accCartArr = JSON.parse(localStorage.getItem("accCart"));
    setAccCart(accCartArr)
  }, [dispatch, render])


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAccessories = accessories.filter((accessorie) =>
    accessorie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input type="text" placeholder="Search accessories" onChange={handleSearch} />
      <div className="petsContainer">
        {filteredAccessories.map((accessorie) => {
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
