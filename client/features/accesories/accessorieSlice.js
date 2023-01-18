import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccessorieAsync = createAsyncThunk('fetchAccessorie', async (id) => {
  try{
    const { data } = await axios.get(`/api/accessories/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const accessorieSlice = createSlice({
  name: 'accessorie',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchAccessorieAsync.fulfilled, (state, action ) => {
      return action.payload
    })
  })
})

export const selectAccessorie = (state) => state.accessorie

export default accessorieSlice.reducer
