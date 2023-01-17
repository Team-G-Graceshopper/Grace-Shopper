import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccessoriesAsync = createAsyncThunk('fetchAllAccessories', async () => {
  try{
    const {data} = await axios.get('/api/accessories')
    return data
  }catch(err){
    console.log(err)
  }
})

export const updateAccessorieAsync = createAsyncThunk('updateAccessorie', async ({id, name, description}) => {
  try{
    const { data } = await axios.put(`/api/accessories/${id}`, {
      name, description
    })
    return data
  }catch (err){
    console.log(err)
  }
})

export const addAccessorieAsync = createAsyncThunk('addAccessorie', async ({id, userId, accessorieId}) => {
  try{
    const { data } = await axios.post(`/api/accessories/${id}`, {
    userId,
    accessorieId
    })
    return data
  }catch (err){
    console.log(err)
  }
})

export const removeAccessorieAsync = createAsyncThunk('removeAccessorie', async ({id, userId, accessorieId}) => {
  try{
    const { data } = await axios.put(`/api/accessories/cart/remove/${id}`, {
    userId,
    accessorieId
    })
    return data
  }catch (err){
    console.log(err)
  }
})

export const updateAccessorieQuantityAsync = createAsyncThunk('updateQuantity', async ({id, quantity, userId, accessorieId}) => {
  try{
    const { data } = await axios.put(`/api/accessories/cart/quantity/${id}`, {
    quantity,
    userId,
    accessorieId
    })
    return data
  }catch (err){
    console.log(err)
  }
})

export const fetchAccessorieQuantityAsync = createAsyncThunk('fetchQuantity', async ({id, userId, accessorieId}) => {
  try{
    const { data } = await axios.get(`/api/accessories/cart/quantity/${id}`, {
    quantity,
    userId,
    accessorieId
    })
    return data
  }catch (err){
    console.log(err)
  }
})

export const destoryAccessorieAsync = createAsyncThunk('deleteAccessorie', async (id) => {
  try{
    const { data } = await axios.delete(`/api/accessories/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchAccessoriesAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(removeAccessorieAsync.fulfilled, (state, action) => {
      return state = state.filter((accessorie) => {
        return accessorie.id != action.payload.id
      })
    })
  })
})

export const selectAccessories = (state) => state.accessories

export default accessoriesSlice.reducer
