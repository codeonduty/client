// shoppingList.js --- Reduxt Toolkit slice for shopping list

// Libraries:

import { createSlice } from '@reduxjs/toolkit';

// Modules:

import checkout from './checkout';

// Code:

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const shoppingListSlice = createSlice({
  name: 'shopping list',
  initialState,
  reducers: {
    setShoppingList: (state, action) => {
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

  extraReducers: {
    [checkout.pending]: (state, action) => {
      state.loading = true;
    },

    [checkout.fulfilled]: (state, action) => {
      state.loading = false;

      clearItems(state);
    },

    [checkout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  setShoppingList,
  clearItems,
  addItem,
  removeItem,
  updateItem,
  increaseItem,
  decreaseItem,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;

// shoppingList.js ends here
