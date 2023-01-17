import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPetAsync = createAsyncThunk('fetachAPet', async (id) => {
  try{
    const {data} = await axios.get(`/api/pets/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const updatePetAsync = createAsyncThunk('updateAPet', async ({id, name, breed, type, description, imageUrl, price, weight, quantity, userId}) => {
  try{
    const {data} = await axios.put(`/api/pets/${id}`, {
      name,
      breed,
      type,
      description,
      imageUrl,
      price,
      weight,
      quantity,
      userId
    })
    return data
  }catch(err){
    console.log(err)
  }
})

export const destroyPetAsync = createAsyncThunk('deleteAPet', async (id) => {
  try{
    const {data} = await axios.delete(`/api/pets/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const petSlice = createSlice({
  name: 'pet',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchPetAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(updatePetAsync.fulfilled, (state, action) => {
      return state = action.payload
    })
  })
})

export const selectPet = (state) => state.pet

export default petSlice.reducer
