import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <img 
        src={isDarkMode ? "/wp-content/themes/bitrader/assets/img/icons/sun.svg" : "/wp-content/themes/bitrader/assets/img/icons/moon.svg"} 
        alt={isDarkMode ? "Light mode" : "Dark mode"} 
        width="20" 
        height="20"
      />
    </button>
  );
};

export default ThemeToggle;