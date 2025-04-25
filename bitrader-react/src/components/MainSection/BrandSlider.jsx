import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BrandSlider = () => {
  return (
    <div className="partner partner--gradient tg-section">
      <div className="container">
        <div className="partner__wrapper">
          <Swiper
            spaceBetween={24}
            grabCursor={true}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5, spaceBetween: 15 },
              1200: { slidesPerView: 6, spaceBetween: 25 },
            }}
            autoplay={{ delay: 1, disableOnInteraction: true }}
            speed={2000}
          >
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd01-2.png"
                      alt="Brand 1"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd02-2.png"
                      alt="Brand 2"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd03-2.png"
                      alt="Brand 3"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd04-2.png"
                      alt="Brand 4"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd05-2.png"
                      alt="Brand 5"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <a href="#">
                    <img
                      decoding="async"
                      src="/wp-content/uploads/2023/10/barnd06-2.png"
                      alt="Brand 6"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
