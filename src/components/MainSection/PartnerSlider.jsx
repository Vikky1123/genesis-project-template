
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const PartnerSlider = () => {
  return (
    <section className="brand-area brand-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50">
              <h2 className="title">Trusted by <span>1,000+</span> Companies</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container brand-active">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd01-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd02-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd03-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd04-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd05-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brand-item">
                    <img src="/assets/img/uploads/2023/10/barnd06-2.png" alt="Brand Logo" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
