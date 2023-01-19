import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartAccessoriesAsync = createAsyncThunk('fetchCartAccessories', async (id) => {
  try{
    const { data } = await axios.get(`/api/accessories/cart/accessories/${id}`)
    return data
  }catch (err){
    console.log(err)
  }
})

export const cartAccessoriesSlice = createSlice({
  name: 'cartAccessories',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
      builder.addCase(fetchCartAccessoriesAsync.fulfilled, (state, action) => {
        return action.payload
      })
    })
})

export const selectCartAccessories = (state) => state.cartAccessories

export default cartAccessoriesSlice.reducer
