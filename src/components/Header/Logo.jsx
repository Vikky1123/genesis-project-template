
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div className="logo">
      <Link className="main-logo" to="/">
        <img 
          id="main-logo" 
          className={theme}
          src="/wp-content/uploads/2024/06/logo-3.png" 
          style={{ maxHeight: '30px' }} 
          alt="Logo" 
        />
      </Link>
    </div>
  );
};

export default Logo;
