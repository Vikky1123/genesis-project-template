
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/Header/ThemeToggle';
import HeroBanner from './components/MainSection/HeroBanner';
import ErrorBoundary from './components/ErrorBoundary';

// Import CSS files for proper styling
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-fontsd1c0.css';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/aosd1c0.css';

const App = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Log theme changes
    console.log('Current theme:', theme);
  }, [theme]);

  return (
    <div className={`app-wrapper ${theme}-mode`}>
      <ErrorBoundary>
        <Preloader />
        <ThemeToggle />
        <ScrollToTop />
        <Header />
        <main id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<HeroBanner />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;
