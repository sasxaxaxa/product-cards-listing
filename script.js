Fancybox.bind("[data-fancybox]", {})

document.querySelectorAll('.product-card').forEach((card) => {

  const swiperEl = card.querySelector('.product-card__slider');
  const paginationEl = card.querySelector('.slider-pagination');
  const nextBtn = card.querySelector('.slider-btn--next');
  const prevBtn = card.querySelector('.slider-btn--prev');

  new Swiper(swiperEl, {
    loop: true,

    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },

    pagination: {
      el: paginationEl,
      clickable: true,
    },
    autoplay: false
  });

});