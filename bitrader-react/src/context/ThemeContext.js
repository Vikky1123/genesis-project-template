import React, { createContext, useContext, useState, useEffect } from 'react';
import { preloadThemeAssets } from '../utils/preloadAssets';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bitrader-theme-mode') || 'light';
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeTheme = async () => {
      try {
        await preloadThemeAssets();
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('bitrader-theme-mode', theme);
      } catch (error) {
        console.error('Failed to preload theme assets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTheme();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return null; // Or return a loading spinner
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);