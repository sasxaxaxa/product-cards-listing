new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
  autoplay: false
})

Fancybox.bind("[data-fancybox]", {})

