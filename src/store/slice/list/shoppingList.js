// shoppingList.js --- Reduxt Toolkit slice for shopping list

// Libraries:

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

// None

// Code:

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const shoppingListSlice = createSlice({
  name: 'shopping list',
  initialState,
});

export default shoppingListSlice.reducer;

// shoppingList.js ends here
