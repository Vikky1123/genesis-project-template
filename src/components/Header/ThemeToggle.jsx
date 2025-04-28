
import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import './Header.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="mode-switch-wrap">
      <button 
        className={`mode-switch-btn ${isDark ? 'active' : ''}`} 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="dark-btn">
          <i className="fas fa-moon"></i>
        </span>
        <span className="light-btn">
          <i className="fas fa-sun"></i>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
