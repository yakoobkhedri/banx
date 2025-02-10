// swiper

var wellcome = new Swiper(".wellcome", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-prev",
  },
  on: {
    reachEnd: function () {
        document.querySelector('.swiper-button-prev').classList.add('hidden');
    },
    fromEdge: function () {
        document.querySelector('.swiper-button-prev').classList.remove('hidden');
    }
}
});

// counter

$('.counter').counterUp({
  delay: 10,
  time: 1400
});