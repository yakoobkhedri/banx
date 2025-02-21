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
  
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();

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
  
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();

  // 

  var options3 = {
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
  
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();

  // 
  // 

  var options4 = {
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
  
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();

  // 
  // 

  var options5 = {
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
  
  var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
  chart5.render();

  // 
  // 

  var options6 = {
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
  
  var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
  chart6.render();

  // 
  // 

  var options7 = {
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
  
  var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
  chart7.render();

  // 
  // 

  var options8 = {
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
  
  var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
  chart8.render();

  // 
  // 

  var options9 = {
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
  
  var chart9 = new ApexCharts(document.querySelector("#chart9"), options9);
  chart9.render();

  // 
  // 

  var options10 = {
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
  
  var chart10 = new ApexCharts(document.querySelector("#chart10"), options10);
  chart10.render();

  // 
  // 

  var options11 = {
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
  
  var chart11 = new ApexCharts(document.querySelector("#chart11"), options11);
  chart11.render();

  // 
  // 

  var options12 = {
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
  
  var chart12 = new ApexCharts(document.querySelector("#chart12"), options12);
  chart12.render();

  // 