import React, { useRef, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import SkipLink from './SkipLink';
import { useSticky, useMobileMenu, useClickOutside, useRouteChange, useTabTrap } from '../../hooks';
import styles from './Header.module.css';

const Header = () => {
  const isSticky = useSticky();
  const { isOpen, toggle, close } = useMobileMenu();
  const location = useLocation();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  
  useClickOutside(menuRef, close);
  useRouteChange(close);
  useTabTrap(menuRef, isOpen, close);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      close();
      menuButtonRef.current?.focus();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const menuItems = [
    { id: 815, title: "Home", path: "/", isActive: location.pathname === "/" },
    { id: 816, title: "Statistics", path: "/statistics", isActive: location.pathname === "/statistics" },
    { id: 1463, title: "Investments", path: "/investments", isActive: location.pathname === "/investments" },
    { id: 823, title: "Services", path: "/services", isActive: location.pathname === "/services" },
    { id: 818, title: "About Us", path: "/about-us", isActive: location.pathname === "/about-us" },
    { id: 819, title: "Contact Us", path: "/contact-us", isActive: location.pathname === "/contact-us" }
  ];

  return (
    <>
      <SkipLink />
      <ThemeToggle />
      <header id="sticky-header" className="header-section header-section--style2">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <Logo />
              <div className={`menu-area menu--style1 ${isOpen ? 'active' : ''}`}>
                <ul id="menu-main-menu" className="menu menu" ref={menuRef} role="navigation" aria-label="Main navigation">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id={`menu-item-${item.id}`}
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${item.isActive ? 'current-menu-item page_item current_page_item active' : ''} menu-item-${item.id} nav-item`}
                      role="none"
                    >
                      <Link
                        to={item.path}
                        title={item.title}
                        className="nav-links"
                        onClick={close}
                        role="menuitem"
                        tabIndex={isOpen ? 0 : -1}
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
                      to="/Signup-Signin/index.html"
                      style={{backgroundColor:'#00d094', border: '1px solid #00d094'}}
                      className="trk-btn trk-btn--border trk-btn--primary"
                    >
                      <span>Join Now</span>
                    </Link>
                  </div>
                  
                  <div
                    className={`header-bar d-lg-none header-bar--style1 ${isOpen ? 'active' : ''}`}
                    ref={menuButtonRef}
                    onClick={toggle}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    aria-controls="menu-main-menu"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggle();
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
      </header>
      <main id="main-content" tabIndex="-1">
        {/* Main content will be rendered here */}
      </main>
    </>
  );
};

export default Header;