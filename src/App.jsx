import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HeroBanner from './components/MainSection/HeroBanner';
import ErrorBoundary from './components/ErrorBoundary';
import { useTheme } from './context/ThemeContext';

// Import CSS files
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-fontsd1c0.css';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/aosd1c0.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-wrapper ${theme}-mode`}>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroBanner />} />
          </Routes>
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;