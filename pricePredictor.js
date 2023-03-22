
//var script = document.createElement('script.');
//script.src = 'script.js';
// i dont think these two lines on top are needed


// algo
// I will be using moving average from the past 60 minutes, in 5 minute increments
// if stock price is above moving average, the algo thinks it will keep moving up
// if stock price is below moving averege, the algo thinks it will keep moving down


function pricePredictor(price, time){
    //fetch('https://api.coincap.io/v2/assets/bitcoin')
    //.then(response => response.json())
    //.then(data => {

        var movingAverage = 200;
        var pricePredicted;
        pricePredicted = price+5;
        return pricePredicted;
    
    
}

    



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