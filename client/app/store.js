import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import petsSlice from '../features/pets/petsSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer ,
    pets: petsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
