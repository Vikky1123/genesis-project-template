
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link className="main-logo" to="/">
        <img 
          id="main-logo" 
          className="dark" 
          src="/wp-content/uploads/2024/06/logo-3.png" 
          style={{ maxHeight: "30px" }} 
          alt="Logo" 
        />
      </Link>
    </div>
  );
};

export default Logo;
