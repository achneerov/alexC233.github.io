// Get the Bitcoin price from the CoinDesk API
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    const price = data.bpi.USD.rate;
    document.getElementById('price').textContent = `Price: $${price}`;
    // Create a line chart of the Bitcoin price
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, { 
      type: 'line',
      data: {
        labels: [new Date().toLocaleTimeString()],
        datasets: [{
          label: 'Bitcoin Price',
          data: [price],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  })
  .catch(error => console.error(error));