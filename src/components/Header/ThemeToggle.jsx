
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        <img src="/assets/img/icons/sun.svg" alt="Light mode" />
      ) : (
        <img src="/assets/img/icons/moon.svg" alt="Dark mode" />
      )}
    </button>
  );
};

export default ThemeToggle;
