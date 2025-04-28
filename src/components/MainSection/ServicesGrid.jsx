
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      icon: "/assets/img/uploads/2023/10/services01.png",
      title: "Registered Company",
      description: "Bitrader is officially registered with appropriate financial authorities and complies with all relevant investment regulations",
      link: "/our-services"
    },
    {
      icon: "/assets/img/uploads/2023/10/services02.png",
      title: "Verified Operations",
      description: "Our operations are regularly audited and monitored to meet strict security and performance standards.",
      link: "/services/financial-advisory"
    },
    {
      icon: "/assets/img/uploads/2023/10/services03.png",
      title: "SSL & Platform Security",
      description: "We use advanced SSL encryption and infrastructure to secure all client data and transactions.",
      link: "/services/management"
    },
    {
      icon: "/assets/img/uploads/2023/10/services04.png",
      title: "Trusted by Thousands",
      description: "With thousands of active members, our reputation continues to grow based on transparency and results.",
      link: "/services/supply-optimization"
    },
    {
      icon: "/assets/img/uploads/2023/10/services05.png",
      title: "Legal Compliance",
      description: "Bitrader abides by international financial regulations and KYC/AML policies to ensure a safe and regulated environment.",
      link: "/services/hr-consulting"
    },
    {
      icon: "/assets/img/uploads/2023/10/services06.png",
      title: "Third-Party Certifications",
      description: "We hold certifications from trusted third-party firms for compliance and operational trustworthiness",
      link: "/services/marketing-consulting"
    }
  ];

  return (
    <div className="elementor-element e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-widget elementor-widget-tg-heading">
              <div className="elementor-widget-container">
                <div className="section-title">
                  <h2 className="title">Legally <span>Registered</span> & Verified</h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default">Your trust is our foundation. Bitrader is a fully registered and compliant investment platform, operating under strict financial regulations to ensure security, transparency, and legitimacy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-widget elementor-widget-tg-servicesBox">
          <div className="elementor-widget-container">
            <div className="row g-4 align-items-center">
              {services.map((service, index) => (
                <div className="col-sm-6 col-md-6 col-lg-4" key={index}>
                  <div 
                    className="service__item service__item--" 
                    data-aos="fade-up" 
                    data-aos-duration={800 + (index * 100)}
                  >
                    <div className="service__item-inner text-center">
                      <div className="service__thumb mb-30">
                        <div className="service__thumb-inner">
                          <img decoding="async" src={service.icon} width="48" alt="Icon" />
                        </div>
                      </div>
                      <div className="service__content">
                        <h5 className="services-title mb-15">
                          <a className="stretched-link" href={service.link}>{service.title}</a>
                        </h5>
                        <p className="mb-0">{service.description}</p>
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
  );
};

export default ServicesGrid;
