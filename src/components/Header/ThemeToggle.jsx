
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme-mode', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme-mode', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="lightdark-switch">
      <span
        className="switch-btn dark-btn"
        id="btnSwitch"
        onClick={toggleTheme}
        style={{ backgroundColor: isDarkMode ? '#ffffff' : 'rgb(0, 208, 148)' }}
      >
        <img
          src={isDarkMode ? "/assets/img/icons/sun.svg" : "/wp-content/themes/bitrader/assets/img/icons/moon.svg"}
          alt="light-dark-switchbtn"
          className="swtich-icon"
        />
      </span>
    </div>
  );
};

export default ThemeToggle;
