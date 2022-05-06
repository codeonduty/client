// store.js --- Redux store

// Libraries:

import { configureStore } from '@reduxjs/toolkit';

// Modules:

import catalogueReducer from './slice/catalogue/catalogue';
import itemReducer from './slice/item/item';
import shopperReducer from './slice/shopper/shopper';
import shoppingListReducer from './slice/list/shopping/shoppingList';
import wishListReducer from './slice/list/wish/wishList';

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
