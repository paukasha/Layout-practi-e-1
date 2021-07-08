import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import vars from '../_vars';
Swiper.use([Navigation, Pagination, Scrollbar]);

const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop:true,
  containerModifierClass: 'banner-slider-',
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
})
