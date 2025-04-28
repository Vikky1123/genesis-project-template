import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
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

const Header = ({
  preloaderImgSrc = "wp-content/themes/bitrader/assets/img/logo/preloader.png",
  switchBtnBgColor = "rgb(0, 208, 148)",
  switchBtnImgSrc = "wp-content/themes/bitrader/assets/img/icons/moon.svg",
  logoHref = "index.html",
  logoImgSrc = "./wp-content/uploads/2024/06/logo-3.png",
  logoImgAlt = "Logo",
  menuItems = [
    { id: "menu-item-815", title: "Home", href: "main page folder/index.html" },
    { id: "menu-item-816", title: "Statistics", href: "index.html" },
    { id: "menu-item-1463", title: "Investments", href: "home-five/index.html" },
    { id: "menu-item-823", title: "Services", href: "our-services/index.html" },
    { id: "menu-item-818", title: "About Us", href: "about-us/index.html" },
    { id: "menu-item-819", title: "Contact Us", href: "contact-us/index.html" }
  ],
  joinBtnHref = "Signup-Signin/index.html",
  joinBtnStyle = { backgroundColor: "#00d094", border: "1px solid #00d094" },
  joinBtnText = "Join Now"
}) => {
  return (
    <>
      {/* preloader */}
      <div className="preloader">
        <img src={preloaderImgSrc} alt="Preloader" />
      </div>
      {/* preloader-end */}

      <div className="lightdark-switch">
        <span className="switch-btn dark-btn" id="btnSwitch" style={{ backgroundColor: switchBtnBgColor }}>
          <img src={switchBtnImgSrc} alt="light-dark-switchbtn" className="swtich-icon" />
        </span>
      </div>

      <a href="javascript:void(0)" className="scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1" data-target="html">
        <i className="fas fa-angle-up"></i>
      </a>

      <header id="sticky-header" className="header-section header-section--style2">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <a className="main-logo" href={logoHref}>
                  <img id="main-logo" className="dark" src={logoImgSrc} style={{ maxHeight: "30px" }} alt={logoImgAlt} />
                </a>
              </div>
              <div className="menu-area menu--style1">
                <ul id="menu-main-menu" className="menu menu">
                  {menuItems.map(item => (
                    <li 
                      key={item.id}
                      itemScope="itemscope" 
                      itemType="https://www.schema.org/SiteNavigationElement" 
                      id={item.id} 
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-815 nav-item"
                    >
                      <a title={item.title} href={item.href} className="nav-links">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <a href={joinBtnHref} style={joinBtnStyle} className="trk-btn trk-btn--border trk-btn--primary">
                      <span>{joinBtnText}</span>
                    </a>
                  </div>

                  {/* toggle icons */}
                  <div className="header-bar d-lg-none header-bar--style1">
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