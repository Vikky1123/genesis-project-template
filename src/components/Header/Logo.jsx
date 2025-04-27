import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext.js";
import './Header.module.css';

const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="logo">
      <Link className="secondary-logo" to="/">
        <img 
          src={`/wp-content/uploads/2024/06/${isDark ? 'logo-3.png' : 'logo-dark.png'}`} 
          style={{ maxHeight: '30px' }} 
          alt="Bitrader Logo" 
        />
      </Link>
    </div>
  );
};

export default Logo;