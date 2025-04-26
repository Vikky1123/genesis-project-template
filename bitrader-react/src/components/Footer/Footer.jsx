
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/assets/img/logo-footer.png" alt="Bitrader" />
                  </Link>
                </div>
                <p>Bitrader - Crypto, Stock and Forex Trading Platform</p>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/our-services">Services</Link></li>
                  <li><Link to="/our-pricing">Pricing</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact-us">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">Support</h4>
                <ul className="footer-links">
                  <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="footer-title">Contact</h4>
                <div className="contact-info">
                  <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
                  <p><i className="fas fa-phone-alt"></i> +1 234 567 8900</p>
                  <p><i className="fas fa-envelope"></i> info@bitrader.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Bitrader. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
