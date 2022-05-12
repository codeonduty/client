// item.js --- Redux Toolkit slice for item

// Libraries:

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

// None

// Code:

const initialState = {
  loading: false,
  error: null,
  details: {},
};

const itemSlice = createSlice({
  name: 'shopping list',
  initialState,
  reducers: {
    populate: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { populate } = itemSlice.actions;

export default itemSlice.reducer;

// item.js ends here
