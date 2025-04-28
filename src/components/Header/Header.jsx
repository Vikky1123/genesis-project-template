import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.module.css';
import '../ScrollToTop/ScrollToTop';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ThemeToggle />
      <header id="sticky-header" className={`header-section header-section--style3 ${isSticky ? 'header-fixed' : ''}`}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-logo"> {/* Added logo container */}
                <a href="/">
                  <img src="/assets/img/uploads/2023/10/logo-dark-2.png" alt="Logo" className="main-logo" /> {/* Added logo image */}
                </a>
              </div>
              <div className={`menu-area menu--style2 ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul id="menu-main-menu" className="menu menu">
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-815" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1267 current_page_item active menu-item-815 nav-item">
                    <Link title="Home" to="/" className="nav-links">Home</Link>
                  </li>
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-816" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-816 nav-item">
                    <Link title="Statistics" to="/statistics" className="nav-links">Statistics</Link>
                  </li>
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1463" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1463 nav-item">
                    <Link title="Investments" to="/investments" className="nav-links">Investments</Link>
                  </li>
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-823" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-823 nav-item">
                    <Link title="Services" to="/services" className="nav-links">Services</Link>
                  </li>
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-818" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-818 nav-item">
                    <Link title="About Us" to="/about-us" className="nav-links">About Us</Link>
                  </li>
                  <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-819" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-819 nav-item">
                    <Link title="Contact Us" to="/contact-us" className="nav-links">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <Link to="/Signup-Signin" style={{backgroundColor:'#00d094', border: '1px solid #00d094'}} className="trk-btn trk-btn--border trk-btn--primary">
                      <span>Join Now</span>
                    </Link>
                  </div>
                  <div className={`header-bar d-lg-none header-bar--style2 ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;