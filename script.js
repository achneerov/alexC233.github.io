

var time;
var price;
var counter = 0;
var lastMinutePrice;
var updateFrequency = 1000; // in milleseconds 
var lineDifference = 15; // how much ahead you want the predicted price to be, multiplied by update freq
var delay = updateFrequency*lineDifference;




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
            var modifiedTime = (time + delay).toString;
            //var modifiedTime = data.timestamp;
            console.log("this is the modified time" + modifiedTime);
            console.log("this is the timestamp from assets " + time);
            var price = parseInt(data.data.priceUsd);
            console.log("this is the price from assets " + price);

            modifiedTime = new Date(time + delay);
            const time1 = modifiedTime.toISOString();
            

            chart.data.labels.push(time1);
            
            

            if (counter >= lineDifference) { 
                chart.data.datasets[0].data.push(price);
            }

            if (counter >= lineDifference) {
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

