
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/bitrader-cored1c0.css';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Handle sticky header on scroll
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: 815, title: "Home", path: "/main-page", isActive: false },
    { id: 816, title: "Statistics", path: "/", isActive: true },
    { id: 1463, title: "Investments", path: "/home-five", isActive: false },
    { id: 823, title: "Services", path: "/our-services", isActive: false },
    { id: 818, title: "About Us", path: "/about-us", isActive: false },
    { id: 819, title: "Contact Us", path: "/contact-us", isActive: false }
  ];

  return (
    <>
      <ThemeToggle />

      <a href="#top" className="scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1" data-target="html">
        <i className="fas fa-angle-up"></i>
      </a>

      <header id="sticky-header" className={`header-section header-section--style2 ${isSticky ? 'header-fixed' : ''}`} ref={headerRef}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <Logo />
              <div className={`menu-area menu--style1 ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul id="menu-main-menu" className="menu menu">
                  {menuItems.map((item) => (
                    <li 
                      key={item.id} 
                      itemScope="itemscope" 
                      itemType="https://www.schema.org/SiteNavigationElement" 
                      id={`menu-item-${item.id}`} 
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${item.isActive ? 'current-menu-item page_item current_page_item active' : ''} menu-item-${item.id} nav-item`}
                    >
                      <Link title={item.title} to={item.path} className="nav-links">
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
                      to="/Signup-Signin" 
                      style={{backgroundColor: '#00d094', border: '1px solid #00d094'}} 
                      className="trk-btn trk-btn--border trk-btn--primary"
                    >
                      <span>Join Now</span>
                    </Link>
                  </div>
                  
                  {/* toggle icons */}
                  <div 
                    className={`header-bar d-lg-none header-bar--style1 ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
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
      </header>
    </>
  );
};

export default Header;
