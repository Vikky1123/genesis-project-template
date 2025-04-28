import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import '../../assets/css/bitrader-cored1c0.css';

const Logo = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="logo">
      <Link className="main-logo" to="/">
        <img 
          src={`/assets/img/uploads/2023/10/${isDarkMode ? 'logo-dark-2' : 'logo-dark-2'}.png`} 
          alt="Bitrader Logo" 
        />
      </Link>
    </div>
  );
};

export default Logo;