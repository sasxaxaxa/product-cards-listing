Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('DOMContentLoaded', function() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  document.querySelectorAll('.product-card').forEach((card, index) => {
    initCardSlider(card, isMobile);
    initZoomButton(card);
    initCardClick(card);
    initModifications(card);
    initLike(card);
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
      autoplay: isMobile ? {
        delay: 3000,
        disableOnInteraction: false,
      } : false
    });

    card.swiper = swiper;
  }

  function initZoomButton(card) {
    const zoomBtn = card.querySelector('.slider-btn--zoom');

    if (zoomBtn) {
      zoomBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        const activeSlide = card.querySelector('.swiper-slide-active a');
        if (activeSlide) {
          activeSlide.click();
        }
      });
    }
  }

  function initCardClick(card) {
    card.addEventListener('click', function(e) {
      const target = e.target;
      const interactiveSelectors = [
        'button',
        'a',
        '.swiper-pagination-bullet',
        '[data-fancybox]'
      ];

      let isInteractive = false;
      for (const selector of interactiveSelectors) {
        if (target.closest(selector)) {
          isInteractive = true;
          break;
        }
      }

      if (!isInteractive) {
        const cardLink = card.dataset.link || '/card';
        window.open(cardLink, '_blank');
      }
    });
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

  function initLike(card) {
    const likeBtn = card.querySelector('.likes__btn');
    const likeValue = card.querySelector('.likes__value');

    let isLiked = false;
    let likesCount = parseInt(likeValue.textContent) || 0;

    likeBtn.addEventListener('click', function(e) {
      e.stopPropagation();

      if (isLiked) {
        likesCount--;
        this.classList.remove('likes__btn--active');
        isLiked = false;
      } else {
        likesCount++;
        this.classList.add('likes__btn--active');
        isLiked = true;
      }

      likeValue.textContent = likesCount;
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  }
});