

import {API_KEY} from '../scripts/api-keys.js';
// Use the apiKey variable in your code
console.log(API_KEY);

// Verify that the apiKey variable is not undefined
if (API_KEY === undefined) {
  console.log('API key is undefined');
} else {
  console.log('API key is defined');
}



console.log('updateStockPrice.js loaded');

const SYMBOL = 'AAPL';

function updateStockPrice() {
  fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const price = data['Global Quote']['05. price'];
      document.getElementById('stock-price').textContent = `$${price}`;
    });
}

updateStockPrice();
setInterval(updateStockPrice, 5000);

