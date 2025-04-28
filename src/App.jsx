
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import AOS from 'aos';
// All CSS is imported globally from index.css

// All CSS is imported from index.css to avoid duplication

const MainSection = () => (
  <div className="main-content">
    <h1 className="text-center">Welcome to BitTrader</h1>
    <p className="text-center">Main content will appear here</p>
  </div>
);

const App = () => {
  const { theme } = useTheme();
  const [appMounted, setAppMounted] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000, 
        once: true
      });
    }
  }, []);

  useEffect(() => {
    setAppMounted(true);
    console.log("App mounted");

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
    <ErrorBoundary>
      <div className={`app-wrapper ${theme}-mode`}> 
        <Preloader />
        <div className="lightdark-switch">
          <span className="switch-btn dark-btn" id="btnSwitch" style={{backgroundColor: "rgb(0, 208, 148)"}}>
            <img src="/wp-content/themes/bitrader/assets/img/icons/moon.svg" alt="light-dark-switchbtn" className="swtich-icon" />
          </span>
        </div>
        <ScrollToTop />
        <Header />
        <main id="main-content" tabIndex="-1"> 
          <Routes>
            <Route path="/" element={<MainSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
