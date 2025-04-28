import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const PartnerSlider = () => {
  return (
    <div className="partner partner--gradient tg-section">
      <div className="container">
        <div className="partner__wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            grabCursor={true}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={2000}
            className="partner__slider"
          >
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd01-2.png" alt="Partner 1" /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd02-2.png" alt="Partner 2" /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd03-2.png" alt="Partner 3" /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd04-2.png" alt="Partner 4" /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd05-2.png" alt="Partner 5" /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd06-2.png" alt="Partner 6" /></a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;