
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="lightdark-switch">
      <span 
        className={`switch-btn ${isDarkMode ? 'light-btn' : 'dark-btn'}`} 
        id="btnSwitch" 
        onClick={toggleTheme}
        style={{ backgroundColor: 'rgb(0, 208, 148)' }}
      >
        <img 
          src={`/assets/img/icons/${isDarkMode ? 'sun.svg' : 'moon.svg'}`} 
          alt="light-dark-switchbtn" 
          className="swtich-icon"
        />
      </span>
    </div>
  );
};

export default ThemeToggle;
