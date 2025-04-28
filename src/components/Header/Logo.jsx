
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();
  
  // Choose the logo based on theme
  const logoSrc = theme === 'dark' 
    ? "/assets/img/uploads/2024/06/logo-3.png" 
    : "/assets/img/uploads/2024/06/logo-dark.png";

  return (
    <div className="logo">
      <Link className="main-logo" to="/">
        <img 
          id="main-logo" 
          className={theme}
          src={logoSrc}
          style={{ maxHeight: '30px' }} 
          alt="Logo" 
        />
      </Link>
    </div>
  );
};

export default Logo;
