import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAccessorieAsync, selectAccessorie, addAccessorieAsync} from "./accessorieSlice";
import { updateAccessorieAsync } from "./accessoriesSlice";
import { Button } from '@mui/material'


const Accessorie = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const test = useSelector((state) => state.auth.me)
  const { Id } = useParams()
  const accessorie = useSelector(selectAccessorie)



  const addCartClick = (id, userId) => {
    dispatch(updateAccessorieAsync({ id, userId }))
  }

  const deleteButton = async (id) => {
    await dispatch(removeAccessorieAsync(id))
    setRender(!render)
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateAccessorieAsync({id: Id, name, description}))
    setRender(render)
  }

  useEffect(() => {
    dispatch(fetchAccessorieAsync(Id))
  }, [dispatch, render])

  useEffect(() => {
    if (accessorie.name){
      setName(accessorie.name)
      setDescription(accessorie.description)
    }
  }, [accessorie])

  return (
    <>
    <div className="petsContainerSingle">
    <div className='singlePet'>
      <ul>
    <img className="single-product-image" src={accessorie.imageUrl} />
    <li>{accessorie.name}</li>
    <li>{accessorie.price}</li>
    <li>{accessorie.description}</li>
    </ul>
    <Button variant="contained" size="large" onClick={() => addCartClick(accessorie.id, test.id)}>Add to Cart</Button>
     
    </div>
    </div>
    {test.privledge == "admin" ? 
    <form onSubmit={formSubmit}>
      <label>Accessorie Name:</label>
      <input name="accessorieName" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Accessorie Description:</label>
      <input name="accessorieDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update</button>
    </form> : null}
    </>
  )
}

export default Accessorie;
