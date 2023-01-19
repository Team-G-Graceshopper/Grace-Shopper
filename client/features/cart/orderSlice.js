import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addOrderAsync = createAsyncThunk('addOrder', async ({address, pets, accessories, userId}) => {
  try{
    const { data } = await axios.post('/api/orders' , {
      address,
      pets,
      accessories,
      userId
    })
    return data
  }catch(err){
    console.log(err)
  }
})

export const fetchOrdersAsync = createAsyncThunk('fetchOrders', async () => {
  try{
    const { data } = await axios.get('/api/orders')
    console.log(data)
    return data
  }catch(err){
    console.log(err)
  }
})

export const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
      return action.payload
    })
    // builder.addCase(addOrderAsync.fulfilled, (state, action) => {
    //   return state.push(action.payload)
    // })
  }
})

export const selectOrder = (state) => state.orders

export default orderSlice.reducer
