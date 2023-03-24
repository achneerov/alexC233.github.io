var ctx = document.getElementById('myChart').getContext('2d');

//var script = document.createElement('pricePredicted');
//script.src = 'pricePredictor.js';
// i dont think i need these either

var time;
var price;
var counter = 0;
var lastMinutePrice;
var updateFrequency = 1000; // in milleseconds // worked with 7
var lineDifference = 15; // how much ahead you want the predicted price to be // worked with 7



    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Bitcoin Price',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                
            },
            {
                label: 'Predicted Bitcoin Price',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                },
            }
        }
    });

    
    function updateChart() {
        console.log("");
        console.log("");
        console.log("");
            
        fetch('https://api.coincap.io/v2/assets/bitcoin')
        .then(response => response.json())
        .then(data => {
            console.log("this is is normal data from assets ");
            console.log(data);
            var time = parseInt(data.timestamp);
            console.log("this is the timestamp from assets " + time);
            var price = parseInt(data.data.priceUsd);
            console.log("this is the price from assets " + price);
            
            chart.data.labels.push(time);
        
            // the x and y format isnt working
    
            if (counter >= lineDifference){ // was 7
                chart.data.datasets[0].data.push(price);
            }
            
            //chart.data.datasets[1].data.push(pricePredictor(price, time));
            
            if (counter >= lineDifference) { // was 7
                if (data.data[data.data.length - 1] > 59) {
                  var lastMinutePrice = chart.data.datasets[0].data[59];
                } else {
                  var lastMinutePrice = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1];
                }
                console.log("This is the last minute price according to script.js " + lastMinutePrice);
              }
            
            
            

            lastMinutePrice = parseInt(lastMinutePrice)

            pricePredictor(price, time, counter, lastMinutePrice, updateFrequency, lineDifference)
            .then(price => {
                console.log("This is the price predicted in script.js " + price);
                chart.data.datasets[1].data.push(price);
            })
            .catch(error => {
                console.error('Error:', error);
                });


                

            chart.update();
            ++counter;
        });
    }
        
    

    setInterval(updateChart, updateFrequency);

        /*
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
            var time = new Date(data.time.updatedISO);
            var price = data.bpi.USD.rate_float;
            chart.data.labels.push(time.toLocaleTimeString());
            chart.data.datasets[0].data.push(price);
            
            var predictedPrice = chart.data.datasets[1];
            predictedPrice.data.push(price+5);
            predictedPrice.backgroundColor = 'rgb(54, 162, 235)';
            predictedPrice.borderColor = 'rgb(54, 162, 235)';
            chart.update();
            });
        */