
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="javascript:void(0)" 
      className={`scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1 ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;
