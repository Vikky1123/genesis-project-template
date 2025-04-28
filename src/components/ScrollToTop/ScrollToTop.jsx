import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="#" 
      className={`scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1 ${isVisible ? 'active' : ''}`} 
      data-target="html"
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;