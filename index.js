const axios = require('axios');
const polyfillLibrary = require('polyfill-library');

// Function to test connection to Polyfill.io and load polyfills
const testPolyfillConnection = async () => {
  try {
    // Request polyfills for modern features like Array.prototype.includes
    const polyfillString = await polyfillLibrary.getPolyfillString({
      features: { 'Array.prototype.includes': { flags: ['gated'] } },
      uaString: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    });

    // Output the polyfill string or any relevant message
    console.log('Polyfill string received:', polyfillString.substring(0, 100) + '...');
    
    // Test if Array.prototype.includes is available
    if (!Array.prototype.includes) {
      console.log('Array.prototype.includes is not available');
    } else {
      console.log('Array.prototype.includes is available');
    }
  } catch (error) {
    console.error('Error connecting to Polyfill.io:', error.message);
  }
};

// Generate traffic by calling the function every few seconds
setInterval(testPolyfillConnection, 5000);
