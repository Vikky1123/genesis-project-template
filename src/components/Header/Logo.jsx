
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="logo">
      <Link to="/" className="main-logo">
        <img
          id="main-logo"
          className={isDark ? "light" : "dark"}
          src="/assets/img/uploads/2024/06/logo-3.png"
          style={{ maxHeight: "30px" }}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
