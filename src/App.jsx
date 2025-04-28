import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import MainSection from './components/MainSection/MainSection';
import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ErrorBoundary>
      <Router>
        <div className={`main-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
          <Header />
          <Routes>
            <Route path="/" element={<MainSection />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;