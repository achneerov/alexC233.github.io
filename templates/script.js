var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Bitcoin Price',
                    data: [],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

        function updateChart() {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => response.json())
                .then(data => {
                    var time = new Date(data.time.updatedISO);
                    var price = data.bpi.USD.rate_float;
                    chart.data.labels.push(time.toLocaleTimeString());
                    chart.data.datasets[0].data.push(price);
                    chart.update();
                });
        }

        setInterval(updateChart, 10000);