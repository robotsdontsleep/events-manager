'use client';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Slider.css';

const styles = {
  className: 'slider',
  spaceBetween: 40,
  slidesPerView: 3,
  speed: 800,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.btn-prev',
    prevEl: '.btn-next',
  },
};

const modules = [Autoplay, Navigation];

export default function Slider({ items, slideItem: Slide }) {
  return (
    <div className="slider-wrapper">
      <Swiper {...styles} modules={modules} loop={items.length > styles.slidesPerView}>
        {items.map(item => (
          <SwiperSlide key={crypto.randomUUID()}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {items.length > styles.slidesPerView && (
        <div className="button-menu">
          <div className="btn btn-next"></div>
          <div className="btn btn-prev"></div>
        </div>
      )}
    </div>
  );
}
