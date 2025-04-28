
import React from 'react';

const MainSection = () => {
  return (
    <div className="main-content">
      <div className="container">
        <h1 className="text-center">Welcome to BitTrader</h1>
        <p className="text-center">Your cryptocurrency trading platform</p>
        <div className="row my-5">
          <div className="col-md-6 offset-md-3">
            <div className="card p-4 shadow">
              <h3>Get Started Today</h3>
              <p>Start trading cryptocurrencies with our easy-to-use platform.</p>
              <ul className="list-unstyled">
                <li>✓ Real-time market data</li>
                <li>✓ Secure transactions</li>
                <li>✓ Expert trading insights</li>
                <li>✓ Low trading fees</li>
              </ul>
              <button className="btn btn-primary mt-3">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
