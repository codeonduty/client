// populate.js --- Function to populate catalogue in store

// Libraries:

import { createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import fetchCatalogue from '../../api/catalogue/fetchCatalogue';

// Code:

const populate = createAsyncThunk(
  'item/catalogue/fetch',
  async ({ rejectWithValue }) => {
    try {
      // Get response from fetching catalogue in database
      const response = await fetchCatalogue();

      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default populate;

// populate.js ends here
