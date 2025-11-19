import { configureStore } from '@reduxjs/toolkit';
import userReducers from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: { user: userReducers, cart: cartReducer },
});
