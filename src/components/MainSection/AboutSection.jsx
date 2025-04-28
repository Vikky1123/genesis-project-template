
import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="elementor-element e-flex e-con-boxed e-con">
      <div className="e-con-inner">
        <div className="elementor-element e-con-full e-flex e-con">
          <div className="elementor-element elementor-widget">
            <div className="elementor-widget-container">
              <div className="about__thumb pe-lg-5" data-aos="fade-right" data-aos-duration="800">
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img decoding="async" src="/assets/img/uploads/2023/10/about01-2.png" alt="About Us" />
                    
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>50+</h3>
                        <p>Global Partners</p>
                      </div>
                    </div>
                    
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>30+</h3>
                        <p>Countries Served</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="elementor-element e-con-full e-flex e-con">
          <div className="about__content" data-aos="fade-left" data-aos-duration="800">
            <h2>Meet<span> Our Company</span> Unless Miss The Opportunity</h2>
            <p className="mb-0">Hey there! So glad you stopped by to Meet Our Company. Don't miss out on this opportunity to learn about what we do and the amazing team that makes it all happen! Our company is all about creating innovative solutions and providing top-notch services to our clients. From start to finish, we're dedicated to delivering results that exceed expectations.</p>
            
            <div className="about_btnc">
              <a href="#" target="_blank" rel="nofollow" className="trk-btn trk-btn--primary trk-btn--arrow">
                Explore More    
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
