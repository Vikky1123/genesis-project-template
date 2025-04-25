import React from 'react';

const services = [
  {
    title: 'Registered Company',
    link: '/our-services/index.html',
    img: '/wp-content/uploads/2023/10/services01.png',
    desc: 'Bitrader is officially registered with appropriate financial authorities and complies with all relevant investment regulations',
  },
  {
    title: 'Verified Operations',
    link: '/services/financial-advisory/index.html',
    img: '/wp-content/uploads/2023/10/services02.png',
    desc: 'Our operations are regularly audited and monitored to meet strict security and performance standards.',
  },
  {
    title: 'SSL & Platform Security',
    link: '/services/management/index.html',
    img: '/wp-content/uploads/2023/10/services03.png',
    desc: 'We use advanced SSL encryption and infrastructure to secure all client data and transactions.',
  },
  {
    title: 'Trusted by Thousands',
    link: '/services/supply-optimization/index.html',
    img: '/wp-content/uploads/2023/10/services04.png',
    desc: 'With thousands of active members, our reputation continues to grow based on transparency and results.',
  },
  {
    title: 'Legal Compliance',
    link: '/services/hr-consulting/index.html',
    img: '/wp-content/uploads/2023/10/services05.png',
    desc: 'Bitrader abides by international financial regulations and KYC/AML policies to ensure a safe and regulated environment.',
  },
  {
    title: 'Third-Party Certifications',
    link: '/services/marketing-consulting/index.html',
    img: '/wp-content/uploads/2023/10/services06.png',
    desc: 'We hold certifications from trusted third-party firms for compliance and operational trustworthiness',
  },
];

const ServicesGrid = () => (
  <section className="services-section">
    <div className="elementor-element elementor-element-014671b e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-f98f54e e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-d7c75de elementor-widget elementor-widget-tg-heading">
              <div className="elementor-widget-container">
                <div className="section-title">
                  <h2 className="title">Legally <span>Registered</span> & Verified</h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-cc01eca elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default">
                  Your trust is our foundation. Bitrader is a fully registered and compliant investment platform, operating under strict financial regulations to ensure security, transparency, and legitimacy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-94c77b0 elementor-widget elementor-widget-tg-servicesBox">
          <div className="elementor-widget-container">
            <div className="row g-4 align-items-center">
              {services.map((service, idx) => (
                <div className="col-sm-6 col-md-6 col-lg-4" key={service.title}>
                  <div className="service__item service__item--" data-aos="fade-up" data-aos-duration={800 + idx * 100}>
                    <div className="service__item-inner text-center">
                      <div className="service__thumb mb-30">
                        <div className="service__thumb-inner">
                          <img decoding="async" src={service.img} width="48" alt="Icon" />
                        </div>
                      </div>
                      <div className="service__content">
                        <h5 className="services-title mb-15">
                          <a className="stretched-link" href={service.link}>{service.title}</a>
                        </h5>
                        <p className="mb-0">{service.desc}</p>
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
  </section>
);

export default ServicesGrid;
