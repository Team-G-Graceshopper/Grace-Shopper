import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPetsAsync, selectPets, filterPets } from './petsSlice';
import { updatePetAsync } from '../pet/petSlice';
import { Button } from '@mui/material'


const Pets = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.me);
  const [test, setTest] = useState(false);
//   const [setState, setNewState] = useState("none")
//   const [category, setCategory] = useState("")
//   const [searchResults, setSearchResults] = useState("")

// const handleSearch = () => {
//   const results = pets.filter(pet => pet.name.toLowerCase().includes(searchResults.toLowerCase()));
//   setSearchResults(results);

// const filteredData = useMemo(()=> {
//   if(typeof searchResults === "object" && searchResults.length > 0) {
//     return searchResults
//   }
//   if(!category || category === "all") {
//     return pets;
//   }
//   return pets.filter(element => element.category === category)

// }, [category, pets, searchResults]);  

// let uniqueCategories = [...new Set(pets.map((item) => item.category))],

// const handleChange = (e,p) => {
  
// }



  const petClick = (id) => {
    navigate(`/pets/${id}`);
  };

  const addCartButton = (id, userId) => {
    dispatch(updatePetAsync({ id, userId }))
  }

 

  useEffect(() => {
    dispatch(fetchPetsAsync())
  }, [dispatch])

 
  return (
    <>
      <select defaultValue={'DEFAULT'} onChange={filterPets}>
      <option onClick={() => dispatch(filterPets("dog"))}>Dogs</option>
      <option onClick={() => dispatch(filterPets("cat"))}>Cats</option>


      </select>
     

      <div className="petsContainer">
        {pets.map((pet) => {
          return <div className="pets"
            key={pet.id}>

            <img className="product-image" src={pet.imageUrl} />

            <p onClick={() => petClick(pet.id)}>{pet.name} </p> <p>${pet.price} </p> <p>{pet.breed} </p>
            <Button variant="contained" className="addCart" onClick={() => addCartButton(pet.id, test.id)}>Add to Cart</Button>
          </div>
        })}
      </div>
    </>
  )
}
export default Pets;