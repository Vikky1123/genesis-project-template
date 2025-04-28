
import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="elementor-element elementor-element-47b6712 e-flex e-con-boxed e-con e-parent" data-id="47b6712" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3d03e0f e-con-full e-flex e-con e-child" data-id="3d03e0f" data-element_type="container">
          <div className="elementor-element elementor-element-8a79fe6 elementor-widget elementor-widget-genix-image">
            <div className="elementor-widget-container">
              <div className="about__thumb pe-lg-5" data-aos="fade-right" data-aos-duration="800">
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img decoding="async" src="/assets/img/uploads/2023/10/about01-2.png" alt="About" />
                    
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
        
        <div className="elementor-element elementor-element-f496e11 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-2a404d7 elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">Our <span style={{ color: 'var(--secondary-color)' }}>Strategic Partners</span> & Global Network</h2>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-77c0134 elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <p className="elementor-heading-title elementor-size-default">
                We've built strong partnerships with leading financial institutions, technology providers, and industry innovators worldwide. These strategic alliances enable us to offer enhanced trading capabilities, robust security measures, and seamless integration of cutting-edge financial services. Together with our partners, we're creating a more connected and efficient trading ecosystem.
              </p>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-211649c elementor-widget elementor-widget-tg-btn">
            <div className="elementor-widget-container">
              <div className="myclass1">     
                <a href="/about-us" target="_self" rel="nofollow" className="trk-btn trk-btn--border trk-btn--primary">
                  View Partners
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
