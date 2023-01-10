import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPetAsync = createAsyncThunk('fetachAPet', async (id) => {
  try{
    const {data} = await axios.get(`/api/pets/${id}`)
    console.log(data)
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
  })
})

export const selectPet = (state) => state.campus

export default petSlice.reducer
