import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = ({
  mainLogoSrc = "./wp-content/uploads/2024/06/logo-3.png",
  mainLogoHeight = "30px",
  joinBtnBgColor = "#00d094",
  menuItems = [
    { id: 815, title: "Home", path: "/main-page", isActive: false },
    { id: 816, title: "Statistics", path: "/", isActive: false },
    { id: 1463, title: "Investments", path: "/home-five", isActive: false },
    { id: 823, title: "Services", path: "/our-services", isActive: false },
    { id: 818, title: "About Us", path: "/about-us", isActive: false },
    { id: 819, title: "Contact Us", path: "/contact-us", isActive: false }
  ]
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header id="sticky-header" className="header-section header-section--style2">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <Logo />
            <div className="menu-area menu--style1">
              <ul id="menu-main-menu" className="menu menu">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id={`menu-item-${item.id}`}
                    className={`menu-item menu-item-type-post_type menu-item-object-page ${
                      item.isActive ? 'current-menu-item page_item current_page_item active' : ''
                    } menu-item-${item.id} nav-item`}
                  >
                    <Link 
                      title={item.title} 
                      to={item.path} 
                      className="nav-links"
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
                    to="/signup-signin"
                    style={{
                      backgroundColor: joinBtnBgColor,
                      border: `1px solid ${joinBtnBgColor}`
                    }}
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    <span>Join Now</span>
                  </Link>
                </div>
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
  );
};

export default Header;