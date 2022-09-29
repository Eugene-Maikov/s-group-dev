const swiperNews1 = new Swiper(".news__slider-1", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".news__btn-next-1",
    prevEl: ".news__btn-prev-1",
  },
  clickable: true,

  pagination: {
    el: ".news-pagination-1",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const swiperNews2 = new Swiper(".news__slider-2", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".news__btn-next-2",
    prevEl: ".news__btn-prev-2",
  },
  clickable: true,

  pagination: {
    el: ".news-pagination-2",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiperPartners = new Swiper(".partners__slider", {
  slidesPerView: 6,
  spaceBetween: 50,

  navigation: {
    nextEl: ".partners__btn-next",
    prevEl: ".partners__btn-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    770: {
      slidesPerView: 6,
    },
  },
});
const swiperReviews = new Swiper(".reviews__slider", {
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev",
  },

  pagination: {
    el: ".reviews-pagination",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
