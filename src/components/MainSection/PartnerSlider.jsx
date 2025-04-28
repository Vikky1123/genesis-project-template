import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const PartnerSlider = () => {
  const swiperRef = useRef(null);

  const partners = [
    { id: 1, img: '/assets/img/uploads/2023/10/barnd01-2.png', alt: 'Partner 1' },
    { id: 2, img: '/assets/img/uploads/2023/10/barnd02-2.png', alt: 'Partner 2' },
    { id: 3, img: '/assets/img/uploads/2023/10/barnd03-2.png', alt: 'Partner 3' },
    { id: 4, img: '/assets/img/uploads/2023/10/barnd04-2.png', alt: 'Partner 4' },
    { id: 5, img: '/assets/img/uploads/2023/10/barnd05-2.png', alt: 'Partner 5' },
    { id: 6, img: '/assets/img/uploads/2023/10/barnd06-2.png', alt: 'Partner 6' },
  ];

  useEffect(() => {
    // Force refresh Swiper to fix initial rendering issues
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="brand brand--style1 padding-top padding-bottom">
      <div className="container">
        <div className="section__header text-center">
          <h2 className="section__title">Our Trusted Partners</h2>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          speed={1000}
          autoplay={{ 
            delay: 2500, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="brand__slider"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="brand__item">
                <div className="brand__inner">
                  <img src={partner.img} alt={partner.alt} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSlider;