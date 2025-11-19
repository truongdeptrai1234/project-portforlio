import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseQuantityItem(state, action) {
      const index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload,
      );
      state.cart[index].quantity++;
      state.cart[index].totalPrice =
        state.cart[index].unitPrice * state.cart[index].quantity;
    },
    decreaseQuantityItem(state, action) {
      const index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload,
      );
      state.cart[index].quantity--;
      state.cart[index].totalPrice =
        state.cart[index].unitPrice * state.cart[index].quantity;
      state.cart[index].quantity === 0 &&
        cartSlice.caseReducers.deleteCartItem(state, action);
    },
  },
  initialState,
});
export function getTotalCart(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}
export function getTotalPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}
export function getCurrentCartQuantity(id) {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}
export const {
  addCartItem,
  deleteCartItem,
  clearCart,
  increaseQuantityItem,
  decreaseQuantityItem,
} = cartSlice.actions;
export default cartSlice.reducer;
