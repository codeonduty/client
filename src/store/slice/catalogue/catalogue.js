// catalogue.js --- Reduxt Toolkit slice for catalogue

// Libraries:

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import items from './../../../items';
//import populate from './populate';

// Code:

const initialState = {
  loading: false,
  error: null,
  items: items,
};

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,

  /*
  extraReducers: {
    [populate.pending]: (state, action) => {
      state.loading = true;
    },
    [populate.fulfilled]: (state, action) => {
      state.loading = false;

      state.items = action.payload;
    },
    [populate.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  */
});

export default catalogueSlice.reducer;

// catalogue.js ends here
