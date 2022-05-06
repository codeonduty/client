// login.js --- Function to login shopper in

// Libraries:

import { createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import submitLoginForm from '../../api/shopper/submitLoginForm';

// Code:

const login = createAsyncThunk(
  'shopper/login',
  async ({ form, navigate }, { rejectWithValue }) => {
    try {
      // Get response from submitting login form to server
      const response = await submitLoginForm(form);

      // Navigate to catalogue upon successful login
      navigate('/item/catalogue');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default login;

// login.js ends here
