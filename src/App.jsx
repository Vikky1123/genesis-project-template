
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection/MainSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader/Preloader';

// Import CSS files
import './assets/css/bitrader-cored1c0.css';

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <Header />
      <ScrollToTop />
      <main id="main-content" tabIndex="-1">
        <MainSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
