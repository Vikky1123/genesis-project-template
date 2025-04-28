
import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <a href="/" className={`logo ${className}`}>
      <img src="/wp-content/uploads/2024/06/logo-3.png" alt="Bitrader Logo" className="main-logo" />
    </a>
  );
};

export default Logo;
