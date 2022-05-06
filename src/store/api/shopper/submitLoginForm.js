// submitLoginForm.js --- Function to submit login form to server

// Libraries

// None

// Modules:

import api from '../api';

// Code:

const submitLoginForm = async (form) => {
  const response = await api.post('/api/shopper/login', form);

  return response;
};

export default submitLoginForm;

// submitLoginForm.js ends here
