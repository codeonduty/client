// login.js --- Function to login shopper in

// Libraries:

import { createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import submitRegisterForm from '../../api/shopper/submitRegisterForm';

// Code:

const login = createAsyncThunk(
  'shopper/register',
  async ({ form, navigate }, { rejectWithValue }) => {
    try {
      // Get response from submitting login form to server
      const response = await submitRegisterForm(form);

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
