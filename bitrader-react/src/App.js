
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import PreloadAssets from './components/PreloadAssets/PreloadAssets';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';

// Import global styles
import './assets/css/bitrader-core.css';
import './assets/css/bitrader-custom.css';
import './assets/css/wp-emoji-styles.css';
import './assets/css/classic-theme-styles.css';
import './assets/css/hfe-widgets-style.css';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <PreloadAssets>
        <Router>
          <Header />
          <MainSection />
          <Footer />
        </Router>
      </PreloadAssets>
    </ThemeProvider>
  );
}

export default App;
