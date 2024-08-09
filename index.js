const axios = require('axios');

const testPolyfillConnection = async () => {
  try {
    const response = await axios.get('https://cdn.polyfill.io/v3/polyfill.min.js');
    console.log('Connection to polyfill.io successful:', response.status);
  } catch (error) {
    console.error('Error connecting to polyfill.io:', error.message);
  }
};

// Generate traffic by calling the function every few seconds
setInterval(testPolyfillConnection, 5000);
