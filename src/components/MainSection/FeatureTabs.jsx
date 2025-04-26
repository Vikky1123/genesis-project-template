import { useEffect } from 'react';
import AOS from 'aos';

const FeatureTabs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
                      <span style={{color: 'var(--secondary-color)'}}>Platform </span> Statistics
                    </h2>
                    <p className="mb-0 el-section-description">
                      Explore our impressive performance metrics that make Bitrader a leading choice for traders worldwide.
                    </p>
                  </div>

                  <div className="feature__nav">
                    <div className="nav nav--feature flex-column nav-pills" id="feat-pills-tab" role="tablist" aria-orientation="vertical">
                      {[
                        "Consistently high success rate across all trading pairs",
                        "Average daily volume with minimal transaction fees", 
                        "Growing user base with exceptional retention rates",
                        "Ultra-fast transaction processing with advanced security"
                      ].map((text, i) => (
                        <div 
                          key={i}
                          className={`nav-link ${i === 0 ? 'active' : ''}`}
                          id={`tg-tab-${i}`}
                          data-bs-toggle="pill"
                          data-bs-target={`#tg-id-${i}`}
                          role="tab"
                          aria-controls={`tg-id-${i}`}
                          aria-selected={i === 0}
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>{text}</h6>
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
                  <div className="tab-content" id="feat-pills-tabContent">
                    {[
                      {
                        img: "features01.png",
                        percentImg: "percent01.png",
                        label: "Success Rate",
                        stat: "89%",
                        desc: "Trading Success"
                      },
                      {
                        img: "features02.png",
                        percentImg: "percent02.png",
                        label: "Daily Volume",
                        stat: "$18M",
                        desc: "Trading Volume"
                      },
                      {
                        img: "features01.png",
                        percentImg: "percent03.png",
                        label: "User Growth",
                        stat: "30K+",
                        desc: "Active Users"
                      },
                      {
                        img: "features02.png",
                        percentImg: "percent04.png",
                        label: "Transaction Speed",
                        stat: "0.02s",
                        desc: "Processing Time"
                      }
                    ].map((tab, i) => (
                      <div 
                        key={i}
                        className={`tab-pane fade ${i === 0 ? 'show active' : ''}`}
                        id={`tg-id-${i}`}
                        role="tabpanel"
                        aria-labelledby={`tg-tab-${i}`}
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img 
                            decoding="async" 
                            src={`${process.env.PUBLIC_URL}/wp-content/uploads/2023/10/${tab.img}`} 
                            alt="Feature image" 
                          />

                          <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                            <div className="floating-content_item floating-content_item--style2 text-center">
                              <img 
                                decoding="async" 
                                src={`${process.env.PUBLIC_URL}/wp-content/uploads/2023/10/${tab.percentImg}`}
                                width="80" 
                                alt="Feature image"
                              />
                              <p className="style2">{tab.label}</p>
                            </div>
                          </div>

                          <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                            <div className="floating-content_item floating-content_item--style3 d-flex align-items-center">
                              <h3 className="style2">{tab.stat}</h3>
                              <p className="ms-3 style2">{tab.desc}</p>
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
        <span className="feature_shape-item feature_shape-item--1">
          <img 
            decoding="async" 
            src={`${process.env.PUBLIC_URL}/wp-content/uploads/2023/10/features_shape.png`}
            width="70" 
            alt="shape-icon"
          />
        </span>
        <span className="feature_shape-item feature_shape-item--2"><span></span></span>
      </div>
    </section>
  );
};

export default FeatureTabs;