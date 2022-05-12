// checkoutShoppingList.js --- Function to checkout shopping list to server

// Libraries:

// None

// Modules:

import api from '../../api';

// Code:

const checkoutShoppingList = async (shoppingList) => {
  const response = await api.post('/api/shopper/list/shopping', shoppingList);

  return response;
};

export default checkoutShoppingList;

// checkoutShoppingList.js ends here
