import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import accessorieSlice from '../features/accesories/accessorieSlice';
import accessoriesSlice from '../features/accesories/accessoriesSlice';
import adminSlice from '../features/admin/adminSlice';
import authReducer from '../features/auth/authSlice';
import cartAccessoriesSlice from '../features/cart/cartAcessoriesSlice';
import cartSlice from '../features/cart/cartSlice';
import petSlice from '../features/pet/petSlice';
import petsSlice from '../features/pets/petsSlice';
import userSlice from '../features/user/userSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer ,
    pets: petsSlice,
    pet: petSlice,
    cart: cartSlice,
    accessories: accessoriesSlice,
    cartAccessories: cartAccessoriesSlice,
    users: adminSlice,
    accessorie: accessorieSlice,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
