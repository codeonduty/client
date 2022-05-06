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

const shoppingListSlice = createSlice({
  name: 'shopping list',
  initialState,
});

export default shoppingListSlice.reducer;

// item.js ends here
