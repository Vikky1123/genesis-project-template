
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../assets/css/bitrader-cored1c0.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="lightdark-switch">
      <span 
        className="switch-btn dark-btn" 
        id="btnSwitch" 
        style={{ backgroundColor: 'rgb(0, 208, 148)' }}
        onClick={toggleTheme}
        role="button"
        aria-pressed={isDarkMode}
        tabIndex="0"
      >
        <img 
          src={`/wp-content/themes/bitrader/assets/img/icons/${isDarkMode ? 'sun' : 'moon'}.svg`} 
          alt="light-dark-switchbtn" 
          className="swtich-icon"
        />
      </span>
    </div>
  );
};

export default ThemeToggle;
