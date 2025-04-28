
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const FeatureStats = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    {
      title: "Consistently high success rate across all trading pairs",
      image: "./wp-content/uploads/2023/10/features01.png",
      statIcon: "./wp-content/uploads/2023/10/percent01.png",
      statTitle: "Success Rate",
      statValue: "89%",
      statDesc: "Trading Success"
    },
    {
      title: "Average daily volume with minimal transaction fees",
      image: "./wp-content/uploads/2023/10/features02.png",
      statIcon: "./wp-content/uploads/2023/10/percent02.png",
      statTitle: "Daily Volume",
      statValue: "$18M",
      statDesc: "Trading Volume"
    },
    {
      title: "Growing user base with exceptional retention rates",
      image: "./wp-content/uploads/2023/10/features01.png",
      statIcon: "./wp-content/uploads/2023/10/percent03.png",
      statTitle: "User Growth",
      statValue: "30K+",
      statDesc: "Active Users"
    },
    {
      title: "Ultra-fast transaction processing with advanced security",
      image: "./wp-content/uploads/2023/10/features02.png",
      statIcon: "./wp-content/uploads/2023/10/percent04.png",
      statTitle: "Transaction Speed",
      statValue: "0.02s",
      statDesc: "Processing Time"
    }
  ];

  return (
    <section className="feature feature--style1 padding-bottom padding-top bg-color">
      <div className="container">
        <div className="feature__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-md-6 col-lg-5">
              <div className="feature__content" data-aos="fade-right" data-aos-duration="800">
                <div className="feature__content-inner">
                  <div className="section-header">
                    <h2 className="mb-15 mt-minus-5 el-section-title">
                      <span style={{ color: 'var(--secondary-color)' }}>Platform </span> Statistics
                    </h2>
                    <p className="mb-0 el-section-description">
                      Explore our impressive performance metrics that make Bitrader a leading choice for traders worldwide.
                    </p>
                  </div>

                  <div className="feature__nav">
                    <div className="nav nav--feature flex-column nav-pills" role="tablist" aria-orientation="vertical">
                      {tabItems.map((item, index) => (
                        <div 
                          key={index}
                          className={`nav-link ${activeTab === index ? 'active' : ''}`}
                          onClick={() => handleTabChange(index)}
                          role="tab"
                          aria-selected={activeTab === index ? "true" : "false"}
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>{item.title}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-6">
              <div className="feature__thumb pt-5 pt-md-0" data-aos="fade-left" data-aos-duration="800">
                <div className="feature__thumb-inner">
                  <div className="tab-content">
                    {tabItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                        role="tabpanel"
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img 
                            decoding="async" 
                            src={item.image} 
                            alt="Feature image" 
                          />
                          
                          <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                            <div className="floating-content__item floating-content__item--style2 text-center">
                              <img 
                                decoding="async" 
                                src={item.statIcon} 
                                width="80" 
                                alt="Feature image" 
                              />
                              <p className="style2">{item.statTitle}</p>
                            </div>
                          </div>
                          
                          <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                            <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                              <h3 className="style2">{item.statValue}</h3>
                              <p className="ms-3 style2">{item.statDesc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="feature__shape">
        <span className="feature__shape-item feature__shape-item--1">
          <img 
            decoding="async" 
            src="./wp-content/uploads/2023/10/features_shape.png" 
            width="70" 
            alt="shape-icon" 
          />
        </span>
        <span className="feature__shape-item feature__shape-item--2">
          <span></span>
        </span>
      </div>
    </section>
  );
};

export default FeatureStats;
