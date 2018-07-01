var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["собака", "кошка", "слон"],
        datasets: [{
            label: "Вес зверей",
            backgroundColor: ["red","black","green"],
            borderColor: 'rgb(255, 99, 132)',
            data: [17,45, 40],
        }]
    },

    // Configuration options go here
    options: {}
});