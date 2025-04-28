
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureStats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="elementor-element e-con-full e-flex e-con e-parent">
      <div className="elementor-element elementor-widget elementor-widget-offer-tab">
        <div className="elementor-widget-container">
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
                          <div className="nav nav--feature flex-column nav-pills" id="feat-pills-tab" role="tablist" aria-orientation="vertical">
                            <div className="nav-link active" id="tg-tab-0" data-bs-toggle="pill" data-bs-target="#tg-id-0" role="tab" aria-controls="tg-id-0" aria-selected="true">
                              <div className="feature__item">
                                <div className="feature__item-inner">
                                  <div className="feature__item-content">
                                    <h6>Consistently high success rate across all trading pairs</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nav-link" id="tg-tab-1" data-bs-toggle="pill" data-bs-target="#tg-id-1" role="tab" aria-controls="tg-id-1" aria-selected="false">
                              <div className="feature__item">
                                <div className="feature__item-inner">
                                  <div className="feature__item-content">
                                    <h6>Average daily volume with minimal transaction fees</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nav-link" id="tg-tab-2" data-bs-toggle="pill" data-bs-target="#tg-id-2" role="tab" aria-controls="tg-id-2" aria-selected="false">
                              <div className="feature__item">
                                <div className="feature__item-inner">
                                  <div className="feature__item-content">
                                    <h6>Growing user base with exceptional retention rates</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nav-link" id="tg-tab-3" data-bs-toggle="pill" data-bs-target="#tg-id-3" role="tab" aria-controls="tg-id-3" aria-selected="false">
                              <div className="feature__item">
                                <div className="feature__item-inner">
                                  <div className="feature__item-content">
                                    <h6>Ultra-fast transaction processing with advanced security</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="feature__thumb pt-5 pt-md-0" data-aos="fade-left" data-aos-duration="800">
                      <div className="feature__thumb-inner">
                        <div className="tab-content" id="feat-pills-tabContent">
                          <div className="tab-pane fade show active" id="tg-id-0" role="tabpanel" aria-labelledby="tg-tab-0" tabIndex="0">
                            <div className="feature__image floating-content">
                              <img decoding="async" src="/assets/img/uploads/2023/10/features01.png" alt="Feature image" />
                              <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style2 text-center">
                                  <img decoding="async" src="/assets/img/uploads/2023/10/percent01.png" width="80" alt="Feature image" />
                                  <p className="style2">Success Rate</p>
                                </div>
                              </div>
                              <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                                  <h3 className="style2">89%</h3>
                                  <p className="ms-3 style2">Trading Success</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tg-id-1" role="tabpanel" aria-labelledby="tg-tab-1" tabIndex="0">
                            <div className="feature__image floating-content">
                              <img decoding="async" src="/assets/img/uploads/2023/10/features02.png" alt="Feature image" />
                              <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style2 text-center">
                                  <img decoding="async" src="/assets/img/uploads/2023/10/percent02.png" width="80" alt="Feature image" />
                                  <p className="style2">Daily Volume</p>
                                </div>
                              </div>
                              <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                                  <h3 className="style2">$18M</h3>
                                  <p className="ms-3 style2">Trading Volume</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tg-id-2" role="tabpanel" aria-labelledby="tg-tab-2" tabIndex="0">
                            <div className="feature__image floating-content">
                              <img decoding="async" src="/assets/img/uploads/2023/10/features01.png" alt="Feature image" />
                              <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style2 text-center">
                                  <img decoding="async" src="/assets/img/uploads/2023/10/percent03.png" width="80" alt="Feature image" />
                                  <p className="style2">User Growth</p>
                                </div>
                              </div>
                              <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                                  <h3 className="style2">30K+</h3>
                                  <p className="ms-3 style2">Active Users</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tg-id-3" role="tabpanel" aria-labelledby="tg-tab-3" tabIndex="0">
                            <div className="feature__image floating-content">
                              <img decoding="async" src="/assets/img/uploads/2023/10/features02.png" alt="Feature image" />
                              <div className="floating-content__top-right floating-content__top-right--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style2 text-center">
                                  <img decoding="async" src="/assets/img/uploads/2023/10/percent04.png" width="80" alt="Feature image" />
                                  <p className="style2">Transaction Speed</p>
                                </div>
                              </div>
                              <div className="floating-content__bottom-left floating-content__bottom-left--style2" data-aos="fade-left" data-aos-duration="1000">
                                <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                                  <h3 className="style2">0.02s</h3>
                                  <p className="ms-3 style2">Processing Time</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature__shape">
              <span className="feature__shape-item feature__shape-item--1">
                <img decoding="async" src="/assets/img/uploads/2023/10/features_shape.png" width="70" alt="shape-icon" />
              </span>
              <span className="feature__shape-item feature__shape-item--2"><span></span></span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeatureStats;
