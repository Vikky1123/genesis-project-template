
import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MainSection from './components/MainSection/MainSection';
import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './index.css';

function App() {
  useEffect(() => {
    // Any initialization code if needed
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="App">
          <Preloader />
          <ScrollToTop />
          <Header />
          <MainSection />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
