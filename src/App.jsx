
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader/Preloader';

// Import CSS files
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/bitrader-fontsd1c0.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Preloader />
        <ThemeToggle />
        <Header />
        <ScrollToTop />
        <main id="main-content" tabIndex="-1">
          <MainSection />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
