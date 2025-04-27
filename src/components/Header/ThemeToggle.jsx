import React from 'react';
import { useTheme } from "../../context/ThemeContext.js";
import './Header.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="lightdark-switch">
      <span 
        className="switch-btn" 
        id="btnSwitch" 
        style={{ backgroundColor: '#00d094' }}
        onClick={toggleTheme}
      >
        <img 
          src={`/wp-content/themes/bitrader/assets/img/icons/${isDark ? 'sun.svg' : 'moon.svg'}`} 
          alt="light-dark-switchbtn" 
          className="swtich-icon"
        />
      </span>
    </div>
  );
};

export default ThemeToggle;