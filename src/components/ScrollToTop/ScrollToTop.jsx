import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#top"
      onClick={scrollToTop}
      className="scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1"
    >
      <i className="fas fa-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;