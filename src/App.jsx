import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/Header/ThemeToggle'; 
import MainSection from './components/MainSection/MainSection';
import ErrorBoundary from './components/ErrorBoundary';
import AOS from 'aos';
import 'aos/dist/aos.css';

// CSS imports
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-fontsd1c0.css';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/aosd1c0.css';

// Elementor CSS imports
import './assets/css/elementor/frontend.min87cc.css';
import './assets/css/elementor/widget-icon-list.min87cc.css';
import './assets/css/elementor/widget-heading.min87cc.css';
import './assets/css/elementor/widget-image.min87cc.css';

//Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const App = () => {
  const { theme } = useTheme();
  const [appMounted, setAppMounted] = useState(false);

  useEffect(() => {
    console.log('Current theme:', theme);
    AOS.init({
      duration: 1000, 
      once: true
    });
  }, [theme]);

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
    <ThemeProvider> 
      <ErrorBoundary>
        <Preloader />
        <ThemeToggle /> 
        <div className={`app-wrapper ${theme}-mode`}> 
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
    </ThemeProvider>
  );
};

export default App;