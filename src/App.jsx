
import React, { useEffect } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection/MainSection';
import './assets/css/bootstrap.mind1c0.css';
import './assets/css/bitrader-cored1c0.css';
import './assets/css/bitrader-customd1c0.css';
import './assets/css/bitrader-fontsd1c0.css';
import './assets/css/aosd1c0.css';

function App() {
  useEffect(() => {
    // Initialize any required scripts here
    console.log('App mounted');
  }, []);

  return (
    <div className="bitrader-wrapper">
      <Header />
      <MainSection />
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text text-center">
                <p>© 2023 Bitrader. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
