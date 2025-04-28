
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/Header/ThemeToggle';
import HeroBanner from './components/MainSection/HeroBanner';
import MainSection from './components/MainSection/MainSection';
import ErrorBoundary from './components/ErrorBoundary';

// Import CSS files for proper styling
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-fontsd1c0.css';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/aosd1c0.css';

const App = () => {
  const { theme } = useTheme();
  const [appMounted, setAppMounted] = useState(false);
  
  useEffect(() => {
    // Log theme changes
    console.log('Current theme:', theme);
  }, [theme]);

  useEffect(() => {
    // Set a flag to indicate the app is mounted
    setAppMounted(true);
    console.log("App mounted");
    
    // Preload key images
    const preloadImages = [
      '/assets/img/uploads/2024/06/logo-3.png',
      '/assets/img/uploads/2024/06/logo-dark.png',
      '/assets/img/logo/preloader.png'
    ];
    
    preloadImages.forEach(imgSrc => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  return (
    <div className={`app-wrapper ${theme}-mode`}>
      <ErrorBoundary>
        <Preloader />
        <ThemeToggle />
        <ScrollToTop />
        <Header />
        <main id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<MainSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;
