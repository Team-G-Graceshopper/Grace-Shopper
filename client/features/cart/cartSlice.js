import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartAsync = createAsyncThunk('fetchACart', async (id) => {
  try{
    const {data} = await axios.get(`/api/cart/${id}`)
    console.log(data)
    return data
  }catch(err){
    next(err)
  }
})

export const addCartAsync = createAsyncThunk('AddACart', async (id) => {
  try{
    const{data} = await axios.post(`/api/cart/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
      return action.payload
    })
  })
})

export const selectCart = (state) => state.cart

export default cartSlice.reducer
