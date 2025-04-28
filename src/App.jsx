
import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/additional-styles.css';
import './assets/css/bitrader-customd1c0.css';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Add body class
    document.body.classList.add('home-1');
    console.log('Current theme:', theme); //Theme logging retained from original
  }, [theme]);

  return (
    <div className="main-wrap">
      <ErrorBoundary>
        <Header />
        <MainSection />
        <ScrollToTop />
      </ErrorBoundary>
    </div>
  );
}

export default App;
