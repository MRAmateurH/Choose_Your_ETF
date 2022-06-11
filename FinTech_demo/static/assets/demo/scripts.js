// --------------- function --------------- //

function get_chart_data() {
    
    $.ajax({
        url: '',                        // API Address
        type: 'POST',                   // methods: [POST, GET]
        data: { querytag: data },       // API require parameter: 
        success: function (response) {
            return response;
        },
        error: function (xhr) {console.error()}
    });

}

function get_risk_data() {

    $.ajax({
        url: '',                        // API Address
        type: 'POST',                   // methods: [POST, GET]
        data: { querytag: data },       // API require parameter: 
    
        success: function (response) {
            return response;
        },
        error: function (xhr) {console.error()}
    });

}

function updateAll() {

    var chart_data = get_chart_data();  // ajax function
    var risk_data = get_risk_data();    // ajax function

    updateChart(chart_data);
    updateRisk(risk_data);

}

// updateChart(barchart_data, linechart_data, mixchart_data_1, mixchart_data_2)
// function updateChart(chart_data) {

//     // change data
//     myBarChart.data.datasets[0].data = barchart_data;
//     myLineChart.data.datasets[0].data = linechart_data;
//     myMixChart.data.datasets[0].data = mixchart_data_1;
//     myMixChart.data.datasets[1].data = mixchart_data_2;
 
//     // update data
//     myBarChart.update();
//     myLineChart.update();
//     myMixChart.update();
// };

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateChart(chart_data) {

    var lineArray, BarArray, MixArray_1, MixArray_2 = [];

    
    lineArray = Array(6).fill().map(() => Math.round(Math.random() * 15000));
    BarArray = Array(13).fill().map(() => Math.round(Math.random() * 40000));
    MixArray_1 = Array(31).fill().map(() => Math.round(Math.random() * 20000));
    // debugger
    MixArray_2 = Array(31).fill().map((x,index) => MixArray_1[index]/2);

    // change data
    myBarChart.data.datasets[0].data = lineArray;
    myLineChart.data.datasets[0].data = BarArray;
    myMixChart.data.datasets[0].data = MixArray_1;
    myMixChart.data.datasets[1].data = MixArray_2;
 
    // update data
    myBarChart.update();
    myLineChart.update();
    myMixChart.update();
};



function updateRisk(risk_data) {
    
}

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// })