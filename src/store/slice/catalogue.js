// catalogue.js --- Reduxt Toolkit slice for catalogue

// Libraries:

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import items from './../../items';

// Code:

const initialState = {
  loading: false,
  error: null,
  items: items,
};

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
});

export default catalogueSlice.reducer;

// catalogue.js ends here
