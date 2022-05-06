// api.js --- Client-side API

// Libraries:

import axios from 'axios';

// Modules:

// None

// Code:

const api = axios.create({ baseURL: 'http://localhost:5000', timeout: 5000 });

export default api;

// api.js ends here
