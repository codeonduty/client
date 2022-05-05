// shopper.js --- Redux Toolkit slice for shopper

// Libraries:

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

// None

// Code:

const initialState = {
  loading: false,
  error: null,
  details: null,
};

const shopperSlice = createSlice({
  name: 'shopper',
  initialState,
});

export default shopperSlice.reducer;

// shopper.js ends here
