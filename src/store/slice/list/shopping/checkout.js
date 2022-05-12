// checkout.js --- Function to checkout a shopping list

// Libraries:

import { createAsyncThunk } from '@reduxjs/toolkit';

// Modules:

import checkoutShoppingList from '../../../api/list/wish/checkoutShoppingList';

// Code:

const checkout = createAsyncThunk(
  'shopper/checkout',
  async ({ shoppingList, navigate }, { rejectWithValue }) => {
    try {
      // Get response from submitting shopping list to database
      const response = await checkoutShoppingList(shoppingList);

      console.log(shoppingList);

      // Navigate to catalogue upon successful login
      navigate('/item/catalogue');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default checkout;

// checkout.js ends here
