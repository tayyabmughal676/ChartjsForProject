// let labels1 = ['YES', 'YES BUT IN GREEN'];
// let data1 = [69, 31];
// let colors1 = ['#49A9EA', '#36CAAB'];

// let myDoughnutChart = document.getElementById("myChart").getContext('2d');

// let chart1 = new Chart(myDoughnutChart, {
//     type: 'doughnut',
//     data: {
//         labels: ['YES', 'YES BUT IN GREEN'],
//         datasets: [ {
//             data: [69, 31],
//             backgroundColor: ['#49A9EA', '#36CAAB']
//         }]
//     },
//     options: {
//         title: {
//             text: "Do you like doughnuts?",
//             display: true
//         }
//     }
// });

// let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufthansa Group'];
// let data2 = [199.6, 130.3, 126.3, 130];
// let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

// let myChart2 = document.getElementById("myChart2").getContext('2d');

// let chart2 = new Chart(myChart2, {
//     type: 'bar',
//     data: {
//         labels: labels2,
//         datasets: [ {
//             data: data2,
//             backgroundColor: colors2
//         }]
//     },
//     options: {
//         title: {
//             text: "Number of passengers carried in 2017 (in mio.)",
//             display: true
//         },
//         legend: {
//           display: false
//         }
//     }
// });


// let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
// let myChart3 = document.getElementById("myChart3").getContext('2d');

// let chart3 = new Chart(myChart3, {
//     type: 'line',
//     data: {
//         labels: labels3,
//         datasets: [
//           {
//             label: 'Cancels',
//             fill: true,
//             backgroundColor: "rgba(179, 181, 198, 0.2)",
//             borderColor: "rgba(179, 181, 198, 1)",
//             pointBorderColor: "#fff",
//             pointBackgroundColor: "rgba(179, 181, 198, 1)",
//             data: [50, 12, 55, 7, 29]
//           },
//           {
//             label: 'Accepts',
//             fill: true,
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//             borderColor: "rgba(255, 99, 132, 1)",
//             pointBorderColor: "#fff",
//             pointBackgroundColor: "rgba(255, 99, 132, 1)",
//             data: [51, 10, 32, 20, 44]
//           }
//         ]
//     },
//     options: {
//         title: {
//             text: "Skills",
//             display: true
//         }
//     }
// });

// let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
// let data4 = [83, 67, 66, 61, 47, 187];
// let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

// let myChart4 = document.getElementById("myChart4").getContext('2d');

// let chart4 = new Chart(myChart4, {
//     type: 'pie',
//     data: {
//         labels: labels4,
//         datasets: [ {
//             data: data4,
//             backgroundColor: colors4
//         }]
//     },
//     options: {
//         title: {
//             text: "Population of the European Union (in mio)",
//             display: true
//         }
//     }
// });


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October','November', 'December'],
        datasets: [
            {
              label: 'Accepts',
              fill: true,
              backgroundColor: "rgba(179, 181, 198, 0.2)",
              borderColor: "rgba(179, 181, 198, 1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(179, 181, 198, 1)",
              data: [1,2,3,4,5,6,7,8,9,10,11,12]
            },
            {
              label: 'Cancels',
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              data: [10,20,30,40,50,60,70,80,90,100,11,12]
            },
            {
                label: 'Pending',
                fill: true,
                backgroundColor: "rgba(255, 153, 51, 0.2)",
                borderColor: "rgba(255, 153, 51, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255, 153, 51, 1)",
                data: [1, 28, 37, 47, 46,55,64,72,82,91,101,111,121]
              }
          ]
    },

    // Configuration options go here
    options: {
        title: {
            text: "Appointments",
            display: true
        }
    }
});