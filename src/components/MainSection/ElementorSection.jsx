import React from 'react';
import '../../assets/css/elementor/frontend.min87cc.css';
import '../../assets/css/elementor/widget-icon-list.min87cc.css';
import '../../assets/css/elementor/widget-heading.min87cc.css';
import '../../assets/css/elementor/widget-image.min87cc.css';

const ElementorSection = () => {
  return (
    <section className="elementor-section elementor-top-section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-element elementor-element-47b6712 e-flex e-con-boxed e-con" data-element_type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ee44b74 e-con-full elementor-visible elementor-widget">
                <h2 className="elementor-heading-title elementor-size-default">A fully featured trading platform</h2>
                <p>BitTrader provides a complete solution for your cryptocurrency trading needs with advanced features, security, and real-time data.</p>
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <img src="/assets/img/uploads/2023/10/check.svg" alt="check" />
                    </span>
                    <span className="elementor-icon-list-text">Real-time market data</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <img src="/assets/img/uploads/2023/10/check.svg" alt="check" />
                    </span>
                    <span className="elementor-icon-list-text">Advanced trading tools</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <img src="/assets/img/uploads/2023/10/check.svg" alt="check" />
                    </span>
                    <span className="elementor-icon-list-text">Secure wallet integration</span>
                  </li>
                </ul>
              </div>
              <div className="elementor-widget-image">
                <img src="/assets/img/uploads/2023/10/about01-2.png" className="attachment-large size-large" alt="Platform Features" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementorSection;