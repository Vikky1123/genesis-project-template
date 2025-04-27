
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/Header';
import MainSection from './components/MainSection/MainSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Import CSS files
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/aosd1c0.css';

function App() {
  useEffect(() => {
    // Check if any critical assets failed to load
    const handleError = (e) => {
      console.error('Asset failed to load:', e.target.src || e.target.href);
    };
    
    window.addEventListener('error', handleError, true);
    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <main id="main-content">
          <MainSection />
        </main>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
