import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserAsync = createAsyncThunk('fetchAUser', async (id) => {
  try{
    const { data } = await axios.get(`/api/users/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
   reducers: {},
   extraReducers: (builder => {
    builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
      return action.payload
    })
   })
})

export const selectUser = (state) => state.user
 export default userSlice.reducer
