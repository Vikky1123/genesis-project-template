
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="javascript:void(0)" 
      onClick={scrollToTop}
      className={`scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1 ${isVisible ? 'active' : ''}`}
      data-target="html"
      style={{ display: isVisible ? 'inline-flex' : 'none' }}
    >
      <i className="fas fa-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;
