
import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="elementor-element elementor-element-47b6712 e-flex e-con-boxed e-con e-parent" data-id="47b6712" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3d03e0f e-con-full e-flex e-con e-child" data-id="3d03e0f" data-element_type="container">
          <div className="elementor-element elementor-element-8a79fe6 elementor-widget elementor-widget-genix-image" data-id="8a79fe6" data-element_type="widget" data-widget_type="genix-image.default">
            <div className="elementor-widget-container">
              <div className="about__thumb pe-lg-5" data-aos="fade-right" data-aos-duration="800">
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img 
                      decoding="async" 
                      src="/assets/img/uploads/2023/10/about01-2.png" 
                      alt="About BitTrader" 
                    />
                    
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
        
        <div className="elementor-element elementor-element-f496e11 e-con-full e-flex e-con e-child" data-id="f496e11" data-element_type="container">
          <div className="elementor-element elementor-element-2a404d7 elementor-widget elementor-widget-heading" data-id="2a404d7" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h6 className="elementor-heading-title elementor-size-default">About BitTrader</h6>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-1c2612a elementor-widget elementor-widget-heading" data-id="1c2612a" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">Your Gateway to <span className="sec-title-sd">Financial Freedom</span></h2>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-94e1549 elementor-widget elementor-widget-text-editor" data-id="94e1549" data-element_type="widget" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              <p>BitTrader is a comprehensive cryptocurrency trading platform that combines powerful tools with an intuitive interface. We are dedicated to making crypto trading accessible to everyone, from beginners to experienced traders.</p>
              <p>Our mission is to provide a secure, transparent, and efficient trading environment that empowers users to achieve their financial goals in the digital asset space.</p>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-e8e3bf2 elementor-widget elementor-widget-button" data-id="e8e3bf2" data-element_type="widget" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a href="#" className="trk-btn trk-btn--border trk-btn--primary">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Learn More</span>
                  </span>
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
