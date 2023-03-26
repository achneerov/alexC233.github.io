
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
            var latestPrice = parseInt(data.data[0].priceUsd);
            var lastHourPrice = parseInt(data.data[data.data.length - 1].priceUsd);
            if (counter >= lineDifference) {
                var movingAverage = (latestPrice + lastHourPrice) / 2;
                var pricePredicted = (movingAverage + lastMinutePrice) / 2;

            }
            if (counter < lineDifference) {
                var movingAverage = ((latestPrice + lastHourPrice) / 2);
                var pricePredicted = movingAverage;
            }
            pricePredicted = pricePredicted + Math.floor(Math.random()*5);

            console.log("here is the data from the time api");
            console.log(data)
            console.log("This is the last minute price according to pricePredictor.js " + lastMinutePrice);
            console.log("This is the moving average according to pricePredictor.js " + movingAverage);
            console.log("This is the price predicted in pricePredictor.js " + pricePredicted);
            return pricePredicted;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
