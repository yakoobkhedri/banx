var options1 = {
    series: [
      {
        name: 'سرمایه',
        type: 'line',
        data: [0, 5, 15, 10, 20,12,18],
      },
      {
        name: 'سود',
        type: 'area',
        data: [0, 10, 5, 15, 7,14,19],
      }
    ],
    chart: {
      height: 250,
      type: 'line', // نوع چارت اصلی
    },
    fill: {
      type: 'solid', // استفاده از رنگ ساده
      colors: ['#3082af','#B8C14B2B'], // رنگ بدنه نمودار ناحیه‌ای
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#3082af','#b8c14b']
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["1", "5", "10", "15", "20","25", "30"],
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
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
      y: {
        formatter: function (value) {
          return value + ' هزار تومان';
        }
      },
      style: {
        fontSize: '10px', // سایز فونت
        fontFamily: 'abar-Regular', // نوع فونت
        colors: '#807E75' // رنگ فونت
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart1"), options1);
  chart.render();

  // 

  var options2 = {
    series: [
      {
        name: 'سرمایه',
        type: 'line',
        data: [0, 5, 15, 10, 20,12,18],
      },
      {
        name: 'سود',
        type: 'area',
        data: [0, 10, 5, 15, 7,14,19],
      }
    ],
    chart: {
      height: 250,
      type: 'line', // نوع چارت اصلی
    },
    fill: {
      type: 'solid', // استفاده از رنگ ساده
      colors: ['#3082af','#B8C14B2B'], // رنگ بدنه نمودار ناحیه‌ای
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#3082af','#b8c14b']
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["1", "5", "10", "15", "20","25", "30"],
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
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
      y: {
        formatter: function (value) {
          return value + ' هزار تومان';
        }
      },
      style: {
        fontSize: '10px', // سایز فونت
        fontFamily: 'abar-Regular', // نوع فونت
        colors: '#807E75' // رنگ فونت
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart2"), options2);
  chart.render();