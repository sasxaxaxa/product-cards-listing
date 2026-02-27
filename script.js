Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.product-card').forEach((card, index) => {
    initCardSlider(card);
    initModifications(card);
  });

  function initCardSlider(card, isMobile) {
    const swiperEl = card.querySelector('.product-card__slider');
    const paginationEl = card.querySelector('.slider-pagination');
    const nextBtn = card.querySelector('.slider-btn--next');
    const prevBtn = card.querySelector('.slider-btn--prev');

    const swiper = new Swiper(swiperEl, {
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

    card.swiper = swiper;
  }

  function initModifications(card) {
    const modButtons = card.querySelectorAll('.modifications__btn');

    modButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();

        modButtons.forEach(btn => {
          btn.classList.remove('modifications__btn-active');
          const iconWrapper = btn.querySelector('.modifications__icon-wrapper');
          iconWrapper.classList.remove('style-disable');
          if (!btn.classList.contains('modifications__btn-active')) {
            iconWrapper.classList.add('style-disable');
          }
        });

        this.classList.add('modifications__btn-active');
        const currentIconWrapper = this.querySelector('.modifications__icon-wrapper');
        currentIconWrapper.classList.remove('style-disable');
      });

      const iconWrapper = button.querySelector('.modifications__icon-wrapper');
      if (!button.classList.contains('modifications__btn-active')) {
        iconWrapper.classList.add('style-disable');
      }
    });
  }
});