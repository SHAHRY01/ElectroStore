const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* Initialize Swiper for categories */
var swiperCategories = new Swiper('.categories__container', {
    slidesPerView: 5, // Number of visible slides
    spaceBetween: 24, // Space between slides
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

