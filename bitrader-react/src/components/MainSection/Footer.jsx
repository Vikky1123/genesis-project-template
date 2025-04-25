import React from "react";

const Footer = () => (
  <footer className="footer-section bg-color" role="contentinfo">
    <div className="container">
      <div className="row gy-4 gx-5 align-items-start">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <a href="/" className="footer-logo d-block mb-3">
            <img src="/wp-content/uploads/2023/10/logo-dark-2.png" alt="logo-dark" style={{ maxHeight: 40 }} />
          </a>
          <p>Welcome to our trading site! We offer the best, most affordable products and services around. Shop now and start finding great deals!</p>
          <div className="d-flex gap-2 mt-3">
            <a href="#"><img width="100" height="36" src="/wp-content/uploads/2023/10/App-store-3.png" alt="App Store" /></a>
            <a href="#"><img width="100" height="36" src="/wp-content/uploads/2023/10/Google-play-store-2.png" alt="Google Play" /></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Quick links</h5>
          <ul className="list-unstyled">
            <li><a href="/about-us/index.html">About Us</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="/our-services/index.html">Services</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Support</h5>
          <ul className="list-unstyled">
            <li><a href="/Terms and conditions/index.html">Terms & Conditions</a></li>
            <li><a href="/Terms and conditions/index.html">Privacy Policy</a></li>
            <li><a href="/Terms and conditions/index.html">FAQs</a></li>
            <li><a href="/contact-us/index.html">Support Center</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Company</h5>
          <ul className="list-unstyled">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Job</a></li>
            <li><a href="#">Announce</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-12">
          <h5>Follow Us</h5>
          <ul className="social list-wrap d-flex gap-2 p-0">
            <li><a href="#" className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" className="social__link social__link--style22"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="social__link social__link--style22"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#" className="social__link social__link--style22"><i className="fab fa-youtube"></i></a></li>
            <li><a href="#" className="social__link social__link--style22"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="mb-0">© 2024 All Rights Reserved By Thetork</p>
        </div>
      </div>
      <span className="footer__shape-item footer__shape-item--2"><span></span></span>
      <img width="81" height="40" src="/wp-content/uploads/2023/10/footer_shape-2.png" alt="footer shape" className="footer__shape-item--1 position-absolute" style={{ left: 0, bottom: 0 }} />
    </div>
  </footer>
);

export default Footer;
