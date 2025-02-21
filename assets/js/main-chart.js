var options = {
  series: [
    {
      name: 'سرمایه',
      type: 'line',
      data: [0, 5, 15, 10, 20],
    },
    {
      name: 'سود',
      type: 'area',
      data: [0, 10, 5, 15, 20],
    }
  ],
  chart: {
    height: 250,
    type: 'line', // نوع چارت اصلی
  },
  fill: {
    type: 'gradient', // استفاده از رنگ ساده
    colors: ['#B8C14B2B','#B8C14B2B'], // رنگ بدنه نمودار ناحیه‌ای (قرمز)
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
    categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد"],
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

var chart = new ApexCharts(document.querySelector("#mainchart"), options);
chart.render();