import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const MainSection = () => {
  const { theme } = useTheme();

  return (
    <div className="main-content">
      <h1 className="text-center">Welcome to BitTrader</h1>
      <p className="text-center">Main content will appear here</p>
      <div className={`theme-indicator ${theme}-mode`}>
        Current theme: {theme}
      </div>
    </div>
  );
};

export default MainSection;