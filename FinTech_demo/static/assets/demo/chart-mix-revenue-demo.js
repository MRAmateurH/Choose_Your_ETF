// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Line Chart Example
var ctx = document.getElementById("myRevenueChart");
var myMixChart = new Chart(ctx, {
  type: "bar",
  data: {
      datasets: [{
        type: 'line',
        label: '月增率',
        xAxisID: 'xAxis',
        yAxisID: 'yAxis',
        borderColor: "rgba(255, 99, 71, 1)",
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        fill: false,
        tension: 0,
        data: [10500, 12500, 18500, 16500, 18500],
      },
      {
          type: 'bar',
          label: '營業收入',
          borderColor: "rgba(0, 98, 163, 1)",
          backgroundColor: "rgba(0, 98, 163, 1)",
          data: [10000, 12000, 14000, 16000, 18000]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 31
        }
      }, {
        id: "xAxis",
        display: false,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }, {
        id: "yAxis",
        display: false,
      }],
    },
    legend: {
      display: true
    }
  }
});



//Test function
function updateMixChart() {
  //----------- Test Data -----------// 
  myMixChart.data.datasets[0].data = [13000, 19000, 11000, 15000];
  myMixChart.data.datasets[1].data = [11000, 18000, 13000, 16000];
  myMixChart.update();
};