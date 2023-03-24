
//var script = document.createElement('script.');
//script.src = 'script.js';
// i dont think these two lines on top are needed


// algo
// I will use price from 60 minutes ago and 1 minute ago.
// if stock price is above moving average, the algo thinks it will keep moving up
// if stock price is below moving averege, the algo thinks it will keep moving down

//1679529600000 - 1679522400000
//1679522400000

function pricePredictor(price, time, counter, lastMinutePrice, updateFrequency, lineDifference) {
    var start = time - 14210000;
    var end = time - 10000;
    return fetch(`https://api.coincap.io/v2/assets/bitcoin/history?interval=h2&start=${start}&end=${end}`)
      .then(response => response.json())
      .then(data => {
        console.log("here is the data from the time api");
        console.log(data)
        var latestPrice = parseInt(data.data[0].priceUsd);
        var lastHourPrice = parseInt(data.data[data.data.length - 1].priceUsd);
        if (counter >= lineDifference){ // was 10
            var movingAverage = (latestPrice + lastHourPrice) / 2;
            var pricePredicted = (movingAverage + lastMinutePrice) / 2;
            
            //console.log("It got to counter >=10 in pricepredictor.js");
        }
        if (counter < lineDifference){
            var movingAverage = ((latestPrice + lastHourPrice) / 2);
            var pricePredicted = movingAverage;
        }
        console.log("This is the last minute price according to pricePredictor.js " + lastMinutePrice);
        console.log("This is the moving average according to pricePredictor.js " + movingAverage);
        
        
  
        console.log("This is the price predicted in pricePredictor.js " + pricePredicted);
        return pricePredicted;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }




/*
function pricePredictor(price, time) {
    return fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=h1')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            var lastMinutePrice = parseInt(data.data[10].priceUsd);
            //console.log(lastMinutePrice);
            var lastHourPrice = parseInt(data.data[700].priceUsd);
            //console.log(lastHourPrice);
            
            var pricePredicted;
            
           
            var movingAverage = (lastMinutePrice + lastHourPrice) / 2;
            pricePredicted = movingAverage
            
            console.log("this is the moving average " + movingAverage);
            


            //var pricePredicted = 28000;
            console.log("This is the price predicted in pricePredictor.js " + pricePredicted);
            return pricePredicted;
        });
}
*/



/*
function pricePredictor(price, time){
    
    fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=h1')
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            var lastMinutePrice = data.data[10].priceUsd;
            console.log(lastMinutePrice);
            var lastHourPrice = data.data[700].priceUsd;
            console.log(lastHourPrice);
        

            var pricePredicted = 28000;
            console.log(pricePredicted)

            return pricePredicted;
    
    });
    }
    */

        /*
        var movingAverage = (lastMinutePrice + lastHourPrice) / 2;
        
        var pricePredicted = 0;
        if (price >= movingAverage){
            pricePredicted = price+5;
        }
        if (price < movingAverage){
            pricePredicted = price-5;
        }
        */
        
        
    


    



/*
function updateChart() {
            
    fetch('https://api.coincap.io/v2/assets/bitcoin')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var time = data.timestamp;
        console.log(time);
        var price = parseInt(data.data.priceUsd);
        console.log(price);
        
        chart.data.labels.push(time);
        chart.data.datasets[0].data.push(price);
        chart.data.datasets[1].data.push(pricePredictor(price));

        chart.update();
    });
}
*/