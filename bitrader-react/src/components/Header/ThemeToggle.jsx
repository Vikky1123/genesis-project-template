import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="lightdark-switch">
      <span
        className="switch-btn dark-btn"
        id="btnSwitch"
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleTheme();
          }
        }}
        style={{ backgroundColor: isDark ? '#ffffff' : 'rgb(0, 208, 148)' }}
      >
        <img
          src={isDark ? '/assets/img/icons/sun.svg' : '/assets/img/icons/moon.svg'}
          alt="light-dark-switchbtn"
          className="swtich-icon"
        />
      </span>

      <script>
        // Theme toggle handling moved to theme-mode.js
      </script>
    </div>
  );
};

export default ThemeToggle;