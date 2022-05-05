// store.js --- Redux store

// Libraries:

import { configureStore } from '@reduxjs/toolkit';

// Modules:

import catalogueReducer from './slice/catalogue';
import itemReducer from './slice/item';
import shopperReducer from './slice/shopper';
import shoppingListReducer from './slice/list/shoppingList';
import wishListReducer from './slice/list/wishList';

// Code:

const store = configureStore({
  reducer: {
    catalogue: catalogueReducer,
    item: itemReducer,
    shopper: shopperReducer,
    shoppingList: shoppingListReducer,
    wishList: wishListReducer,
  },
});

export default store;

// store.js ends here
