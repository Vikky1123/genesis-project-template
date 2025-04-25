import React, { useState } from "react";

const faqData = [
  {
    question: "How Many Active Traders Are Currently Using Bitrader?",
    answer:
      "We currently serve over 45,000 active traders worldwide, with an average monthly growth rate of 8%. Our platform is trusted by a diverse community of investors and professionals."
  },
  {
    question: "What Is The Average Return On Investment (ROI) For Users?",
    answer:
      "Our users enjoy an average ROI of 12% per month, depending on their chosen investment plan and market conditions. Past performance does not guarantee future results."
  },
  {
    question: "What Is Bitrader's Total Trading Volume And Market Presence?",
    answer:
      "Bitrader processes over $840 million in trades monthly, with a presence in 50+ countries and partnerships with leading financial institutions."
  },
  {
    question: "How Does Bitrader's Success Rate Compare To Industry Standards?",
    answer:
      "Our platform boasts an 89% trading success rate, significantly higher than the industry average, thanks to our advanced algorithms and expert team."
  },
  {
    question: "What Security Measures And Success Rates Does Bitrader Maintain?",
    answer:
      "We employ SSL encryption, two-factor authentication, and regular security audits to ensure user safety. Our high success rate is a testament to our robust systems."
  },
  {
    question: "What Is The Growth Rate Of Bitrader's User Base And Services?",
    answer:
      "Bitrader's user base grows by an average of 8% monthly, with continuous expansion of our service offerings and global reach."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section padding-top padding-bottom">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>Frequently</span> Asked Questions
          </h2>
          <p>
            Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
          </p>
        </div>
        <div className="row gy-4 gx-5 align-items-center">
          <div className="col-lg-7">
            <div className="accordion accordion--style1" id="faqAccordion1">
              {faqData.map((item, idx) => (
                <div className={`accordion__item${openIndex === idx ? " active" : ""}`} key={idx}>
                  <div className="accordion__header" id={`faq${idx}`}>
                    <button
                      className={`accordion__button${openIndex === idx ? "" : " collapsed"}`}
                      type="button"
                      aria-expanded={openIndex === idx}
                      aria-controls={`faqBody${idx}`}
                      onClick={() => handleToggle(idx)}
                    >
                      {item.question}
                    </button>
                  </div>
                  <div
                    id={`faqBody${idx}`}
                    className={`accordion-collapse collapse${openIndex === idx ? " show" : ""}`}
                    aria-labelledby={`faq${idx}`}
                    data-bs-parent="#faqAccordion1"
                  >
                    <div className="accordion__body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="faq__thumb--style1">
              <img
                src="/wp-content/uploads/2023/10/faq-2.png"
                alt="faq"
                width="443"
                height="370"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
