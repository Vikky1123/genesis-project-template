
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll event to add sticky class
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky-header' : ''}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-2 col-6">
            <Logo />
          </div>
          <div className="col-xl-7 d-none d-xl-block">
            <nav className="main-menu">
              <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 col-6 d-flex justify-content-end align-items-center">
            <ThemeToggle />
            <div className="d-xl-none">
              <button 
                className="mobile-menu-toggle" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="d-none d-xl-block">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
        <div className="mobile-menu-container">
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            <span>&times;</span>
          </button>
          <nav className="mobile-menu">
            <ul className="menu-list">
              <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
              <li><Link to="/services" onClick={toggleMobileMenu}>Services</Link></li>
              <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
              <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
