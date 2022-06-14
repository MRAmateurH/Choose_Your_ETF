// --------------- function --------------- //

var T187ap14_l_data = {
    "data": {
    "BInterest": 223790000.0, 
    "Code": 2330, 
    "CommonDenominationPerShare": "新台幣                 10.0000元", 
    "Date": 1110613, 
    "EPS": 7.82, 
    "Industry": "半導體業", 
    "N_OIncome": 3041580.0, 
    "Name": "台灣積體電路製造股份有限公司", 
    "OIncome": 491076000.0, 
    "ProfitAfterTax": 202873000.0, 
    "Season": 1, 
    "Year": 111
    }
}

// T187ap14_l
function get_dataList() {

    console.log($('#inputStockId').val())
    var id = $('#inputStockId').val()
    var dataList = {}
    
    $.ajax({
        url: '127.0.0.1/5000/T187ap14_l/' + id,     // API Address
        type: 'GET',                                // methods: [POST, GET]
        async: false,
        data: {},                                   // API require parameter: 

        success: function (response) {
            dataList = response.data
            return response;
        },
        error: function (xhr) {console.error()}
    });
    return dataList;
}

function setIncInfoList(data) {

    var dataArray = [data.Name, data.Industry, data.EPS, data.OIncome, data.BInterest, data.N_OIncome, data.ProfitAfterTax]
    
    $('#inputListData').find('span.float-end').each(function(index) {
        $(this).text(dataArray[index])
    })

}

T187ap05_l_data = {
                    "data": {
                    "AOI_ID_PeriodRevenue": 44.9181, 
                    "AOI_LastYearRevenue": 586085000.0, 
                    "AOI_MonthRevenue": 849343000.0, 
                    "Code": 2330, 
                    "DataYM": 11105, 
                    "Date": 1110612, 
                    "Industry": "半導體業", 
                    "LastMonthRevenue": 172561000.0, 
                    "LastYearMonthlyRevenue": 112360000.0, 
                    "MonthlyRevenue": 185705000.0, 
                    "Name": "台積電", 
                    "Note": "無。", 
                    "OI_ID_LastMonthRevenue": 7.61702, 
                    "OI_ID_LastYearMonthlyRevenue": 65.2777
                    }
                }

// T187ap05_l
function get_chart_data() {

    console.log($('#inputStockId').val())
    var id = $('#inputStockId').val()
    var dataList = {}

    $.ajax({
        url: '127.0.0.1/5000/T187ap05_l/' + id,                        // API Address
        type: 'GET',                   // methods: [POST, GET]
        data: {},       // API require parameter: 
        
        success: function (response) {
            dataList = response.data
            return response;
        },
        error: function (xhr) {console.error()}
    });
    return dataList;
}

function setChartData(data) {

    myBarChart.data.datasets[0].data = [data.MonthlyRevenue, data.LastMonthRevenue];
    myBarChart.update();

}

function updateAll() {

    // var dataList = get_dataList();  // ajax function
    // var chartData = get_chart_data();
    // var risk_data = get_risk_data();    // ajax function

    // updateChart(dataList);
    // updateRisk(risk_data);
    var dataList = []
    var chartData = []
    
    $.when(dataList).then(setIncInfoList(T187ap14_l_data.data))
    $.when(chartData).then(setChartData(T187ap05_l_data.data))

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