
import React from 'react';

const Header = ({
  preloaderImage = "wp-content/themes/bitrader/assets/img/logo/preloader.png",
  themeToggleIcon = "wp-content/themes/bitrader/assets/img/icons/moon.svg",
  themeToggleColor = "rgb(0, 208, 148)",
  logoSrc = "./wp-content/uploads/2024/06/logo-3.png",
  logoAlt = "Logo",
  logoMaxHeight = "30px",
  menuItems = [
    { id: "menu-item-815", title: "Home", url: "main page folder/index.html" },
    { id: "menu-item-816", title: "Statistics", url: "index.html" },
    { id: "menu-item-1463", title: "Investments", url: "home-five/index.html" },
    { id: "menu-item-823", title: "Services", url: "our-services/index.html" },
    { id: "menu-item-818", title: "About Us", url: "about-us/index.html" },
    { id: "menu-item-819", title: "Contact Us", url: "contact-us/index.html" }
  ],
  actionButton = {
    text: "Join Now",
    url: "Signup-Signin/index.html",
    style: { backgroundColor: "#00d094", border: "1px solid #00d094" }
  },
  headerStyle = "header-section--style2",
  scrollToTopStyle = "scrollToTop--style1 scrollToTop--home1",
  onThemeToggle = () => {},
  onMenuToggle = () => {}
}) => {
  return (
    <>
      {/* preloader */}
      <div className="preloader">
        <img src={preloaderImage} alt="Preloader" />
      </div>
      {/* preloader-end */}

      <div className="lightdark-switch">
        <span 
          className="switch-btn dark-btn" 
          id="btnSwitch" 
          style={{ backgroundColor: themeToggleColor }}
          onClick={onThemeToggle}
        >
          <img src={themeToggleIcon} alt="light-dark-switchbtn" className="swtich-icon" />
        </span>
      </div>

      <a href="javascript:void(0)" className={`scrollToTop ${scrollToTopStyle} scroll__top scroll-to-target`} data-target="html">
        <i className="fas fa-angle-up"></i>
      </a>

      <header id="sticky-header" className={`header-section ${headerStyle}`}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <a className="main-logo" href="index.html">
                  <img 
                    id="main-logo" 
                    className="dark" 
                    src={logoSrc} 
                    style={{ maxHeight: logoMaxHeight }} 
                    alt={logoAlt}
                  />
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
                      className="menu-item menu-item-type-post_type menu-item-object-page nav-item"
                    >
                      <a title={item.title} href={item.url} className="nav-links">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <a 
                      href={actionButton.url} 
                      style={actionButton.style} 
                      className="trk-btn trk-btn--border trk-btn--primary"
                    >
                      <span>{actionButton.text}</span>
                    </a>
                  </div>
                  
                  {/* toggle icons */}
                  <div 
                    className="header-bar d-lg-none header-bar--style1"
                    onClick={onMenuToggle}
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
