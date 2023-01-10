import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPetsAsync = createAsyncThunk('fetchAllPets', async () => {
  try{
    const {data} = await axios.get('/api/pets')
    return data
  }catch(err){
    console.log(err)
  }
})

export const petsSlice = createSlice({
  name: 'pets',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchPetsAsync.fulfilled, (state, action) => {
      return action.payload
    })
  })
})

export const selectPets = (state) => state.pets

export default petsSlice.reducer
