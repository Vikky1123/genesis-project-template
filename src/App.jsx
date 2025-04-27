import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Banner from './components/MainSection/HeroBanner.jsx';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Banner />
          <MainSection />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;