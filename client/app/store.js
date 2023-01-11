import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import petSlice from '../features/pet/petSlice';
import petsSlice from '../features/pets/petsSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		pets: petsSlice,
		pet: petSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
