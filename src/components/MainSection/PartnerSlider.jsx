import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const PartnerSlider = () => {
  const partners = [
    { id: 1, img: '/assets/img/uploads/2023/10/barnd01-2.png', alt: 'Partner 1' },
    { id: 2, img: '/assets/img/uploads/2023/10/barnd02-2.png', alt: 'Partner 2' },
    { id: 3, img: '/assets/img/uploads/2023/10/barnd03-2.png', alt: 'Partner 3' },
    { id: 4, img: '/assets/img/uploads/2023/10/barnd04-2.png', alt: 'Partner 4' },
    { id: 5, img: '/assets/img/uploads/2023/10/barnd05-2.png', alt: 'Partner 5' },
    { id: 6, img: '/assets/img/uploads/2023/10/barnd06-2.png', alt: 'Partner 6' }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title" data-aos="fade-up">Our Trusted Partners</h2>
          <p data-aos="fade-up" data-aos-delay="100">Join the growing list of satisfied customers who trust our platform</p>
        </div>
        <div className="partners-slider" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
          >
            {partners.map(partner => (
              <SwiperSlide key={partner.id}>
                <div className="partner-item">
                  <img src={partner.img} alt={partner.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;