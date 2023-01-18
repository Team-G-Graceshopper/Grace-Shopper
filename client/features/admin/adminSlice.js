import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsersAsync = createAsyncThunk('fetchAllUsers', async () => {
  try{
    const { data } = await axios.get('/api/users')
    return data
  }catch(err){
    console.log(err)
  }
})

export const updateUserAsync = createAsyncThunk('updateAUser', async ({id, privledge}) => {
  try {
  const { data } = await axios.put(`/api/users/${id}`, {
    privledge
  })
  return data
}catch(err){
  console.log(err)
}
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      return action.payload
    })
    // builder.addCase(updateUserAsync.fulfilled, (state, action) => {
    //   return action.payload
    // })
  })

})

export const selectUsers = (state) => state.users

export default usersSlice.reducer
