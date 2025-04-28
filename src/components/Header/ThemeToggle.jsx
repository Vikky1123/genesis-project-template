
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
      {isDarkMode ? (
        <img src="/assets/img/icons/sun.svg" alt="Light mode" width="20" height="20" />
      ) : (
        <img src="/assets/img/icons/moon.svg" alt="Dark mode" width="20" height="20" />
      )}
    </button>
  );
};

export default ThemeToggle;
