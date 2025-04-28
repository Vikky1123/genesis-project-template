import React, { useState } from 'react';
import '../../assets/css/bitrader-cored1c0.css';
import '../../assets/css/aosd1c0.css';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="features-section padding-top padding-bottom" id="features">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title" data-aos="fade-up">Platform Features</h2>
          <p data-aos="fade-up" data-aos-delay="100">Explore our comprehensive set of features designed for traders of all levels</p>
        </div>

        <div className="features-tabs" data-aos="fade-up" data-aos-delay="200">
          <div className="tabs-nav">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 1 ? 'active' : ''}`} 
                  onClick={() => handleTabClick(1)}
                >
                  <img src="/assets/img/uploads/2023/10/features_icon01.png" alt="Trading" />
                  <span>Trading</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 2 ? 'active' : ''}`} 
                  onClick={() => handleTabClick(2)}
                >
                  <img src="/assets/img/uploads/2023/10/features_icon02.png" alt="Wallet" />
                  <span>Wallet</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 3 ? 'active' : ''}`} 
                  onClick={() => handleTabClick(3)}
                >
                  <img src="/assets/img/uploads/2023/10/features_icon03.png" alt="Security" />
                  <span>Security</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 4 ? 'active' : ''}`} 
                  onClick={() => handleTabClick(4)}
                >
                  <img src="/assets/img/uploads/2023/10/features_icon04.png" alt="Analytics" />
                  <span>Analytics</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
              <div className="features-content">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="features-content-inner">
                      <h3>Advanced Trading Tools</h3>
                      <p>Access a comprehensive suite of trading tools including limit orders, stop-loss, real-time charts, and technical indicators to enhance your trading strategy.</p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check"></i> Real-time market data</li>
                        <li><i className="fas fa-check"></i> Multiple order types</li>
                        <li><i className="fas fa-check"></i> Advanced charting tools</li>
                        <li><i className="fas fa-check"></i> Technical indicators</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-image">
                      <img src="/assets/img/uploads/2023/10/features01.png" alt="Trading Features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
              <div className="features-content">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="features-content-inner">
                      <h3>Secure Wallet System</h3>
                      <p>Keep your assets safe with our state-of-the-art wallet system featuring multi-signature protection, cold storage options, and two-factor authentication.</p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check"></i> Multi-signature security</li>
                        <li><i className="fas fa-check"></i> Cold storage for 95% of assets</li>
                        <li><i className="fas fa-check"></i> Two-factor authentication</li>
                        <li><i className="fas fa-check"></i> Regular security audits</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-image">
                      <img src="/assets/img/uploads/2023/10/features02.png" alt="Wallet Features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
              <div className="features-content">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="features-content-inner">
                      <h3>Advanced Security Measures</h3>
                      <p>Rest easy knowing your account has enterprise-grade security with encryption, biometric verification, and real-time monitoring for suspicious activities.</p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check"></i> AES-256 encryption</li>
                        <li><i className="fas fa-check"></i> Real-time fraud monitoring</li>
                        <li><i className="fas fa-check"></i> Biometric verification options</li>
                        <li><i className="fas fa-check"></i> Regular penetration testing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-image">
                      <img src="/assets/img/uploads/2023/10/services03.png" alt="Security Features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`}>
              <div className="features-content">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="features-content-inner">
                      <h3>Comprehensive Analytics</h3>
                      <p>Track your performance with detailed analytics and reporting. Gain insights into your trading patterns, portfolio performance, and market trends.</p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check"></i> Portfolio performance tracking</li>
                        <li><i className="fas fa-check"></i> Trading pattern analysis</li>
                        <li><i className="fas fa-check"></i> Market trend identification</li>
                        <li><i className="fas fa-check"></i> Customizable reporting</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-image">
                      <img src="/assets/img/uploads/2023/10/services04.png" alt="Analytics Features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;