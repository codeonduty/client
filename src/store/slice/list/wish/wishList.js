// wishList.js --- Redux Toolkit slice for wishlist

// Libraries:

import { createSlice } from '@reduxjs/toolkit';

// Modules:

// None

// Code:

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.items = action.payload;
    },

    clearItems: (state) => {
      state.items = [];
    },

    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((x) => {
        return x.details._id === item.details._id;
      });

      if (existingItem) {
        // Update Redux store
        state.items = state.items.map((x) => {
          return x._id === existingItem._id ? item : x;
        });
      } else {
        state.items.push(item);
      }
    },

    removeItem: (state, action) => {
      const _id = action.payload;

      state.items = state.items.filter((item) => {
        return item.details._id !== _id;
      });
    },

    updateItem: (state, action) => {
      const { _id, quantity } = action.payload;

      state.items = state.items.map((x) => {
        if (x.details._id === _id) x.quantity = quantity;

        return x;
      });
    },
  },
});

export const {
  setWishList,
  clearItems,
  addItem,
  removeItem,
  updateItem,
  increaseItem,
  decreaseItem,
} = wishListSlice.actions;

export default wishListSlice.reducer;

// wishList.js ends here
