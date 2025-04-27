
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="header__logo">
      <Link to="/" className="header__logo-link">
        <img src="/assets/img/uploads/2023/10/logo-dark-2.png" alt="Bitrader" className="header__logo-img dark" />
        <span className="header__logo-text">Bitrader</span>
      </Link>
    </div>
  );
};

export default Logo;
