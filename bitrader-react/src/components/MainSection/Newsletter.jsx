import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setError("");
    // Here you would integrate with your newsletter backend or Mailchimp
  };

  return (
    <section className="cta-section nwsltrcolor bg-color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img
              src="/wp-content/uploads/2023/10/cta-2.png"
              alt="newsletter"
              width="244"
              height="235"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-7">
            <div className="section-title">
              <h2 className="title">
                <span>Subscribe </span> Our News
              </h2>
            </div>
            <p>Hey! Are you tired of missing out on our updates? Subscribe to our news now and stay in the loop!</p>
            <form className="cta-form cta-form--style2 form-subscribe" onSubmit={handleSubmit}>
              <div className="cta-form__inner d-sm-flex align-items-center">
                <input
                  type="email"
                  className="form-control form-control--style2 mb-3 mb-sm-0"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={submitted}
                />
                <button
                  className="trk-btn trk-btn--large trk-btn--secondary2"
                  type="submit"
                  disabled={submitted}
                >
                  {submitted ? "Submitted" : "Submit"}
                </button>
              </div>
              {error && <div className="text-danger mt-2">{error}</div>}
              {submitted && <div className="text-success mt-2">Thank you for subscribing!</div>}
            </form>
          </div>
        </div>
      </div>
      <img
        src="/wp-content/uploads/2023/10/cta_shape1-2.png"
        alt="cta shape"
        width="65"
        height="65"
        className="cta-shape bit_rotate_animation position-absolute"
        style={{ left: 0, bottom: 0 }}
      />
      <img
        src="/wp-content/uploads/2023/10/shape01-2.png"
        alt="cta shape"
        width="106"
        height="106"
        className="cta-shape upAndDown_animation position-absolute"
        style={{ right: 0, top: 0 }}
      />
    </section>
  );
};

export default Newsletter;
