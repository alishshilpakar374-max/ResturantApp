import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingDish = state.dishes.find(
        (dish) => dish.id === action.payload.id,
      );

      if (existingDish) {
        existingDish.quantity += 1;
      } else {
        state.dishes.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    increaseQuantity: (state, action) => {
      const dish = state.dishes.find((dish) => dish.id === action.payload);

      if (dish) {
        dish.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += dish.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const dish = state.dishes.find((dish) => dish.id === action.payload);

      if (dish && dish.quantity > 1) {
        dish.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= dish.price;
      }
    },

    removeFromCart: (state, action) => {
      state.dishes = state.dishes.filter((dish) => dish.id !== action.payload);
    },
    clearCart: (state) => {
      ((state.dishes = []), (state.totalQuantity = 0), (state.totalPrice = 0));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
