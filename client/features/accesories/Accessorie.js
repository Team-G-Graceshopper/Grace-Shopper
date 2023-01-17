import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAccessorieAsync, selectAccessorie } from "./accessorieSlice";
import { updateAccessorieAsync } from "./accessoriesSlice";

const Accessorie = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const test = useSelector((state) => state.auth.me)
  const { Id } = useParams()
  const accessorie = useSelector(selectAccessorie)

  const formSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateAccessorieAsync({id: Id, name, description}))
    setRender(!render)
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
    <h3>{accessorie.name}</h3>
    <p>{accessorie.price}</p>
    <p>{accessorie.description}</p>
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

export default Accessorie
