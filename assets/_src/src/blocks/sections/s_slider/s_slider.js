import Swiper from "swiper";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";
window.Swiper = Swiper;
Swiper.use([Pagination, Navigation, Autoplay, FreeMode]);


const slider = new Swiper('.slider__wrap', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  centeredSlidesBounds: true,
  freeMode: {
    enabled: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});