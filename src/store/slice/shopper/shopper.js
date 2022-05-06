// shopper.js --- Redux Toolkit slice for shopper

// Libraries:

import { createSlice } from '@reduxjs/toolkit';

// Modules:

import login from './login';
import register from './register';

// Code:

const initialState = {
  loading: false,
  error: null,
  details: null,
};

const shopperSlice = createSlice({
  name: 'shopper',
  initialState,
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;

      // Extract details from action payload
      const { username, email } = action.payload.result;
      const { token, error, message } = action.payload;

      // Create shopper profile
      const profile = {
        username,
        email,
        token,
        message,
      };

      // Save shopper information in local storage
      localStorage.setItem('shopper', JSON.stringify({ ...profile }));

      // Update Redux store
      state.error = error;
      state.details = profile;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;

      // Extract details from action payload
      const { username, email } = action.payload.result;
      const { token, error, message } = action.payload;

      // Create shopper profile
      const profile = {
        username,
        email,
        token,
        message,
      };

      // Save shopper information in local storage
      localStorage.setItem('shopper', JSON.stringify({ ...profile }));

      // Update Redux store
      state.error = error;
      state.details = profile;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default shopperSlice.reducer;

// shopper.js ends here