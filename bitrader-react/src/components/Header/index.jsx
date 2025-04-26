
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'sticky-header' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <img 
                src="/assets/img/logo.png" 
                alt="Bitrader" 
                className={darkMode ? 'logo-dark' : 'logo-light'} 
              />
            </Link>
          </div>
          
          <nav className={`main-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/our-services">Services</Link></li>
              <li><Link to="/our-pricing">Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            
            <Link to="/login" className="btn btn-primary login-btn">
              Login
            </Link>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
