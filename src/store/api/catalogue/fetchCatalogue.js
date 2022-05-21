// fetchCatalogue.js --- Function to checkout shopping list to server

// Libraries:

// None

// Modules:

import api from '../api';

// Code:

const fetchCatalogue = async () => {
  const response = await api.get('/api/item/catalogue');

  console.log(response.data);

  return response.data;
};

export default fetchCatalogue;

// fetchCatalogue.js ends here
