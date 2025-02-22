// swiper

var wellcome = new Swiper(".wellcome", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    reachEnd: function () {
        document.querySelector('.swiper-button-prev').classList.add('hidden');
        document.querySelector('.swiper-button-next').classList.add('hidden');
        document.querySelector('.swiper-pagination').classList.add('hidden');
        document.querySelector('.account').classList.remove('hidden');
    },
    fromEdge: function () {
        document.querySelector('.swiper-button-prev').classList.remove('hidden');
        document.querySelector('.swiper-button-next').classList.remove('hidden');
        document.querySelector('.swiper-pagination').classList.remove('hidden');
    }
}
});

var swipertab = new Swiper(".swipertab", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true
});

function openFullscreen() {
  const elem = document.documentElement; // کل صفحه

  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
      elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
  }
}

// فراخوانی تابع برای ورود به حالت تمام‌صفحه
openFullscreen();

window.scrollTo(0, 1);