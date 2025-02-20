var options = {
    series: [{
    name: 'سرمایه',
    data: [0, 5, 15, 10, 20]
  }, {
    name: 'سود',
    data: [0, 10, 5, 15, 20]
  }],
    chart: {
    height: 250,
    type: 'area',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    // type: 'datetime',
    categories: ["فروردین","اردیبهشت","خرداد","تیر","مرداد"],
    labels: {
        style: {
            fontSize: '12px', // سایز فونت
            fontFamily: 'abar-Regular', // نوع فونت
            colors: '#807E75' // رنگ فونت
        }
    }
  },
  yaxis: {
    labels: {
        style: {
            fontSize: '12px', // سایز فونت
            fontFamily: 'abar-Regular', // نوع فونت
            colors: '#807E75' // رنگ فونت
        }
    }
},
  fill: {
      colors: ['#1B76A8', '#B8C14B'],
      type: 'gradient',
      gradient: {
    shade: 'dark',
    type: "horizontal",
    // shadeIntensity: 0.5,
    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
    inverseColors: true,
    opacityFrom: .5,
    opacityTo: .2,
    stops: [0,50, 100],
    colorStops: []
  }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
    y: {
        formatter: function (value) {
            return " هزار تومان " + value.toLocaleString(); // افزودن پسوند تومان
        }
    },
    style: {
        fontSize: '12px', // سایز فونت
        fontFamily: 'abar-Regular', // نوع فونت
        colors: '#807E75' // رنگ فونت
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#mainchart"), options);
  chart.render();
