
//var script = document.createElement('script.');
//script.src = 'script.js';
// i dont think these two lines on top are needed


// algo
// I will use price from 60 minutes ago and 1 minute ago.
// if stock price is above moving average, the algo thinks it will keep moving up
// if stock price is below moving averege, the algo thinks it will keep moving down




function pricePredictor(price, time) {
    return fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=h1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var lastMinutePrice = parseInt(data.data[10].priceUsd);
            console.log(lastMinutePrice);
            var lastHourPrice = parseInt(data.data[700].priceUsd);
            console.log(lastHourPrice);
            
            
            var movingAverage = (lastMinutePrice + lastHourPrice) / 2;
            console.log(movingAverage);
            if (price >= movingAverage){
                pricePredicted = price+5;
            }
            if (price < movingAverage){
                pricePredicted = price-5;
            }


            //var pricePredicted = 28000;
            console.log(pricePredicted);
            return pricePredicted;
        });
}




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