// submitRegisterForm.js --- Function to submit registration form to server

// Libraries

// None

// Modules:

import api from '../api';

// Code:

const submitRegisterForm = async (form) => {
  const response = await api.post('/api/shopper/register', form);

  return response;
};

export default submitRegisterForm;

// submitRegisterForm.js ends here
