import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import '../../assets/css/bitrader-cored1c0.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header header--style1 ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header__wrapper">
          <Logo />

          <div className={`header__menu ${isMenuOpen ? 'active' : ''}`}>
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/investments">Investments</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__actions">
            <ThemeToggle />
            <Link to="/signup" className="trk-btn trk-btn--sm trk-btn--primary d-none d-sm-block">
              Join Now
            </Link>
            <button className="header__menu-trigger" onClick={toggleMenu}>
              <span className={isMenuOpen ? 'active' : ''}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;