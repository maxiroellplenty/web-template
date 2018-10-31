var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });