// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myIncomeStatementChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "營業毛利",
      lineTension: 0,
      backgroundColor: "rgba(2, 117, 216, 0.2)",
      borderColor: "rgba(2, 117, 216, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(2, 117, 216, 1)",
      pointBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(100, 117, 216, 1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      fill: false,
      data: [15000, 35162, 31263, 23394, 23287, 33682, 36274, 38259, 30849, 29159, 37651, 36984, 43451],
      
    }, 
    {
      label: "營業淨利",
      lineTension: 0,
      backgroundColor: "rgba(255, 99, 71, 0.2)",
      borderColor: "rgba(255, 99, 71, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255, 99, 71, 1)",
      pointBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(200, 99, 71, 1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      fill: false,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }, 
    {
      label: "稅後淨利",
      lineTension: 0,
      backgroundColor: "rgba(255, 220, 104, 0.2)",
      borderColor: "rgba(255, 220, 104, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255, 220, 104, 1)",
      pointBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(200, 220, 104, 1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      fill: false,
      data: [8000, 20162, 16263, 8394, 8287, 18682, 21274, 23259, 15849, 14159, 22651, 21984, 28451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
}); 

//Test function
function updateLineChart() {
  //----------- Test Data -----------// 
  myLineChart.data.datasets[0].data = [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000];
  myLineChart.update();
};