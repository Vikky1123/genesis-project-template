import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import PreloadAssets from './components/PreloadAssets/PreloadAssets';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/MainSection/Footer';

// Import global styles
import './assets/css/bitrader-core.css';
import './assets/css/bitrader-custom.css';
import './styles/compatibility.css'; // Import compatibility overrides
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