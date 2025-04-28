
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import '../../assets/css/bitrader-cored1c0.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Statistics", path: "/statistics" },
    { title: "Investments", path: "/investments" },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact-us" }
  ];

  return (
    <header id="sticky-header" className={`header-section header-section--style2 ${isSticky ? 'header-fixed' : ''}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <Logo />
            <div className={`menu-area menu--style1 ${isMenuOpen ? 'active' : ''}`}>
              <ul 
                id="menu-main-menu" 
                className="menu menu" 
                ref={menuRef} 
                role="navigation" 
                aria-label="Main navigation"
              >
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="menu-item menu-item-type-post_type menu-item-object-page nav-item"
                  >
                    <Link 
                      to={item.path} 
                      className="nav-links" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-action">
              <div className="menu-area">
                <div className="header-btn">
                  <Link
                    to="/signup"
                    style={{backgroundColor:'#00d094', border: '1px solid #00d094'}}
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    <span>Join Now</span>
                  </Link>
                </div>
                
                <div
                  className={`header-bar d-lg-none header-bar--style1 ${isMenuOpen ? 'active' : ''}`}
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                  aria-controls="menu-main-menu"
                  role="button"
                  tabIndex={0}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ThemeToggle />
    </header>
  );
};

export default Header;
