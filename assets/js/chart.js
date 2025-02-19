// Create the chart
Highcharts.stockChart('container', {

    title: {
        text: 'Cumulative Sum',
        align: 'left'
    },

    subtitle: {
        text: 'Displays the sum of all the previous values and the current ' +
            'value (only within visible range)',
        align: 'left'
    },

    plotOptions: {
        series: {
            allowPointSelect: true,
            cumulative: true,
            pointStart: '2025-01-01',
            pointIntervalUnit: 'day'
        }
    },

    rangeSelector: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.y}</b>',
        changeDecimals: 3,
        valueDecimals: 3,
        valuePrefix: 'تومان',
        // valueSuffix: ' USD'
    },

    xAxis: {
        minRange: 3 * 24 * 36e5,
        // max: '2023-01-06'
    },
    yAxis: {
        // tickInterval: 1
    },
    series: [
        {
        lineWidth: 2,
        name: 'سود',
        color: '#B8C14B',
        data: [
            0, 5, 10,15, 20, 5, 10, 15,
            5, 10, 0, 5, 10,15, 20, 5, 10, 15,
            5, 10, 0, 5, 10,15, 20, 5, 10, 15,
            5, 10, 0, 5, 10,15, 20, 5, 10, 15,
            5, 10
        ]
    },
     {
        lineWidth: 2,
        name: 'سرمایه',
        color: '#1B76A8',
        data: [
            10, 15, 0,5, 10, 15, 20, 5,
            15, 20, 10, 15, 0,5, 10, 15, 20, 5,
            15, 20,10, 15, 0,5, 10, 15, 20, 5,
            15, 20, 10, 15, 0,5, 10, 15, 20, 5,
            15, 20
        ]
    }
]
});
