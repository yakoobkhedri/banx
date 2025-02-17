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
            cumulative: true,
            pointStart: '2023-01-01',
            pointIntervalUnit: 'day'
        }
    },

    rangeSelector: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.y}</b> (${point.cumulativeSum})<br/>',
        changeDecimals: 2,
        valueDecimals: 2,
        // valuePrefix: '$',
        // valueSuffix: ' USD'
    },

    xAxis: {
        minRange: 3 * 24 * 36e5,
        max: '2023-01-06'
    },

    series: [{
        name: 'The Local Bakery',
        data: [
            0, 5, 10,15, 20, 5, 10, 15,
            5, 10
        ]
    }, {
        name: 'The Local Fishmarket',
        data: [
            10, 15, 0,5, 10, 15, 20, 5,
            15, 20
        ]
    }]
});
