
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ stickyClass = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const defaultMenuItems = [
    { title: "Home", href: "main page folder/index.html" },
    { title: "Statistics", href: "index.html" },
    { title: "Investments", href: "home-five/index.html" },
    { title: "Services", href: "our-services/index.html" },
    { title: "About Us", href: "about-us/index.html" },
    { title: "Contact Us", href: "contact-us/index.html" }
  ];

  return (
    <header id="sticky-header" className={`header-section header-section--style2 ${stickyClass}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a className="main-logo" href="index.html">
                <img 
                  id="main-logo" 
                  className="dark" 
                  src="/wp-content/uploads/2024/06/logo-3.png" 
                  style={{ maxHeight: "30px" }} 
                  alt="Logo" 
                />
              </a>
            </div>
            <div className="menu-area menu--style1">
              <ul 
                id="menu-main-menu" 
                className={`menu menu ${isMenuOpen ? 'active' : ''}`}
                ref={menuRef}
              >
                {defaultMenuItems.map((item, index) => (
                  <li 
                    key={index}
                    itemScope="itemscope" 
                    itemType="https://www.schema.org/SiteNavigationElement" 
                    className="menu-item menu-item-type-post_type menu-item-object-page nav-item"
                  >
                    <a title={item.title} href={item.href} className="nav-links">{item.title}</a>
                  </li>
                ))}
              </ul>
              <div className="header-action">
                <div className="menu-area">
                  <div 
                    className={`header-bar d-lg-none header-bar--style1 ${isMenuOpen ? 'active' : ''}`}
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                    aria-controls="menu-main-menu"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleMenu();
                      }
                    }}
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
      </div>
    </header>
  );
};

export default Header;
