
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const faqItems = [
    {
      question: "How many active traders are currently using Bitrader?",
      answer: "We currently serve over 45,000 active traders worldwide, with an average monthly growth rate of 8%. Our platform handles over 100,000 transactions daily across various trading pairs and investment options.",
      isOpen: true
    },
    {
      question: "What is the average return on investment (ROI) for Bitrader users?",
      answer: "Our users experience an average ROI of 12-15% monthly, with top performers achieving up to 25%. However, returns vary based on market conditions, trading strategy, and risk management practices.",
      isOpen: false
    },
    {
      question: "What is Bitrader's total trading volume and market presence?",
      answer: "Bitrader processes over $840M in monthly trading volume across 30+ countries. We maintain a 99.99% uptime and have facilitated more than $1.2B in successful trades over the past year.",
      isOpen: false
    },
    {
      question: "How does Bitrader's success rate compare to industry standards?",
      answer: "Our platform maintains a 92% user satisfaction rate, significantly above the industry average of 76%. Additionally, 85% of our users have been profitable within their first three months of trading.",
      isOpen: false
    },
    {
      question: "What security measures and success rates does Bitrader maintain?",
      answer: "We employ military-grade encryption and have never experienced a security breach. Our platform successfully processes 99.98% of all transactions, with an average execution time of 0.02 seconds.",
      isOpen: false
    },
    {
      question: "What is the growth rate of Bitrader's user base and services?",
      answer: "We've maintained a consistent 25% year-over-year growth in active users. Our service offerings have expanded by 40% in the last year, now including advanced trading tools, AI-powered analytics, and premium support services.",
      isOpen: false
    }
  ];

  return (
    <div className="elementor-element e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-widget__width-auto elementor-absolute upAndDown_animation elementor-widget elementor-widget-image">
          <div className="elementor-widget-container">
            <img decoding="async" width="106" height="106" src="/assets/img/uploads/2023/10/shape01-2.png" className="attachment-full size-full wp-image-238" alt="" />
          </div>
        </div>
        <div className="elementor-element e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-widget elementor-widget-tg-heading">
              <div className="elementor-widget-container">
                <div className="section-title">
                  <h2 className="title"><span>Frequently</span> Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default">Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets. Still not satisfied? Hit us up.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element e-con-full e-flex e-con e-child">
          <div className="elementor-element e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner">
              <div className="elementor-element elementor-widget elementor-widget-genix-faq">
                <div className="elementor-widget-container">
                  <div className="accordion accordion--style1" id="faqAccordion1" data-aos="fade-right" data-aos-duration="1000">
                    {faqItems.map((item, index) => (
                      <div className="accordion__item" key={index}>
                        <div className="accordion__header" id={`faq${index}`}>
                          <button 
                            className={`accordion__button ${!item.isOpen ? 'collapsed' : ''}`} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#faqBody${index}`} 
                            aria-expanded={item.isOpen ? "true" : "false"} 
                            aria-controls={`faqBody${index}`}
                          >
                            <span className="accordion__button-content">
                              {item.question}
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div 
                          id={`faqBody${index}`} 
                          className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`} 
                          aria-labelledby={`faq${index}`} 
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">{item.answer}</p>
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
    </div>
  );
};

export default FAQ;
