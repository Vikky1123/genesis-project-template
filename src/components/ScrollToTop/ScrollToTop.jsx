
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

  // Set the scroll to top function
  const scrollToTop = () => {
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
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`scrollToTop scrollToTop--style2 scroll__top scroll-to-target ${isVisible ? 'active' : ''}`}
      data-target="html"
      style={{ 
        display: isVisible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#00d094',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 99,
        transition: 'all 0.3s ease'
      }}
    >
      <i className="fas fa-angle-up">↑</i>
    </a>
  );
};

export default ScrollToTop;
