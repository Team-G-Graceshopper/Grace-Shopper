import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
<<<<<<< Updated upstream
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
=======
	reducer: {
		auth: authReducer,
		pets: petsSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
>>>>>>> Stashed changes
});

export default store;
export * from '../features/auth/authSlice';
