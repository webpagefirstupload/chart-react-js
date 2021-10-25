const ctx = document.getElementById('myChart').getContext("2d");
const labels = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
];

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1");
gradient.addColorStop(1, "rgba(0,210,255,0.3");

let delayed;

const data = {
    labels,
    datasets: [{
        data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
        label: "Minecrafty Sales",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189, 195, 199)",
        //tension: 0.4,
    },
    ],
};

const config = {
    type: 'line',
    data: data,
    Options: {
        resposive: true,
        radius: 20,
        // hitRadius: 30,
        hoverRadius: 100,
    },
};

const myChart = new Chart(ctx, config);