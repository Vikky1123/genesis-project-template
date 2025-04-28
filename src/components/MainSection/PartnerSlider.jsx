
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const PartnerSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    const partnerSwiper = new Swiper('.partner__slider', {
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 2,
      breakpoints: {
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
      },
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      speed: 2000,
    });

    swiperRef.current = partnerSwiper;

    // Cleanup function to destroy Swiper instance when component unmounts
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="partner partner--gradient tg-section">
      <div className="container">
        <div className="partner__wrapper">
          <div className="partner__slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd01-2.png" alt="Partner 1" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd02-2.png" alt="Partner 2" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd03-2.png" alt="Partner 3" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd04-2.png" alt="Partner 4" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd05-2.png" alt="Partner 5" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <a href="#"><img decoding="async" src="/assets/img/uploads/2023/10/barnd06-2.png" alt="Partner 6" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
