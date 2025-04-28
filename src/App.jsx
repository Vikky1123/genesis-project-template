import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import MainSection from './components/MainSection/MainSection';

const App = () => {
  const { theme } = useTheme();
  const [appMounted, setAppMounted] = useState(false);

  useEffect(() => {
    setAppMounted(true);
  }, []);

  return (
    <ErrorBoundary>
      <div className={`app-wrapper ${theme}-mode`}> 
        <Preloader />
        <ScrollToTop />
        <Header />
        <main id="main-content" tabIndex="-1"> 
          <Routes>
            <Route path="/" element={<MainSection />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;