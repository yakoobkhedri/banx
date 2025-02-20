var options = {
    series: [{
    // name: 'سود',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    // name: 'سرمایه',
    type: 'area',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
      opacity: [0.35, 1],
      type: 'gradient',
      gradient: {
        // shade: 'dark',
        // type: "horizontal",
        // shadeIntensity: 0.5,
        gradientToColors: ['#B8C14B2B','#B8C14B00'], // optional, if not defined - uses the shades of same color in series
        inverseColors: false,
        opacityFrom: .5,
        // opacityTo: 1,
        // stops: [0, 50, 100],
        // colorStops: []
      }
  },
  labels: ['0', '1','2','3','4','5','6','7','8','9','10'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        // text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        // text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();