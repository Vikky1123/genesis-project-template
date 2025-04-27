
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/Header';
import MainSection from './components/MainSection/MainSection';

// Import CSS files
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/aosd1c0.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <main id="main-content">
          <MainSection />
        </main>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
