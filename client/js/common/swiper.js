export const mainTopSwiper = new Swiper(".mainTopSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".mainTopSwiper-button-next",
    prevEl: ".mainTopSwiper-button-prev",
  },
});

export let productsSwiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".button2-next",
    prevEl: ".button2-prev",
  },
});