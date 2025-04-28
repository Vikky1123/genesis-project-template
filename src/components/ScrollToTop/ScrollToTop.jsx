import React from 'react';
import '../../assets/css/bitrader-cored1c0.css';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="javascript:void(0)" 
      className="scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1" 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;