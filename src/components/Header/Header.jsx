import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header-area ${isSticky ? 'sticky-header' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-7">
            <Logo />
          </div>
          <div className="col-lg-6 col-md-0 d-none d-lg-block">
            <nav className="main-menu">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-5 d-flex justify-content-end">
            <div className="header-action">
              <ThemeToggle />
              <a href="#signup" className="btn">Sign Up</a>
              <button className="menu-toggle d-lg-none" onClick={toggleMenu}>
                <span className={isMenuOpen ? 'open' : ''}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-container">
          <nav className="mobile-menu">
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#features" onClick={toggleMenu}>Features</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;