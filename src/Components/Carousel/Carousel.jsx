import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import './Carousel.css';  // Add any custom styles if necessary
import RightArrow from '../Arrows/RightArrow';
import LeftArrow from '../Arrows/LeftArrow';

const Carousel = ({ items, renderItem }) => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          {renderItem(item)}  {/* Render the item using the passed renderItem prop */}
        </SwiperSlide>
      ))}

      {/* Custom Left and Right navigation buttons */}
      <div className="swiper-button-next"><RightArrow /></div>
      <div className="swiper-button-prev"><LeftArrow /></div>
    </Swiper>
  );
};

export default Carousel;