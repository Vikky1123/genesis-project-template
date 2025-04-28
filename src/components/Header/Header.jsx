
import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { id: 815, title: "Home", path: "/", isActive: location.pathname === "/" },
    { id: 816, title: "Statistics", path: "/statistics", isActive: location.pathname === "/statistics" },
    { id: 1463, title: "Investments", path: "/investments", isActive: location.pathname === "/investments" },
    { id: 823, title: "Services", path: "/services", isActive: location.pathname === "/services" },
    { id: 818, title: "About Us", path: "/about-us", isActive: location.pathname === "/about-us" },
    { id: 819, title: "Contact Us", path: "/contact-us", isActive: location.pathname === "/contact-us" }
  ];

  return (
    <header id="sticky-header" className={`header-section header-section--style2 ${isSticky ? 'sticky-menu' : ''}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <Logo />
            <div className={`menu-area menu--style1 ${mobileMenuOpen ? 'active' : ''}`}>
              <ul id="menu-main-menu" className="menu menu">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id={`menu-item-${item.id}`}
                    className={`menu-item menu-item-type-post_type menu-item-object-page ${item.isActive ? 'current-menu-item page_item current_page_item active' : ''} menu-item-${item.id} nav-item`}
                  >
                    <Link to={item.path} title={item.title} className="nav-links">
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
                    to="/signup-signin"
                    style={{backgroundColor:'#00d094', border: '1px solid #00d094'}}
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    <span>Join Now</span>
                  </Link>
                </div>
                
                <div
                  className={`header-bar d-lg-none header-bar--style1 ${mobileMenuOpen ? 'active' : ''}`}
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
  );
};

export default Header;
