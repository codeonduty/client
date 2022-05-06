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
});

export default wishListSlice.reducer;

// wishList.js ends here
