
import React from 'react';

const MainSection = () => {
  return (
    <div className="main-content">
      <div className="container py-5">
        <h1 className="text-center">Welcome to BitTrader</h1>
        <p className="text-center">Your premier platform for cryptocurrency trading</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Easy Trading</h5>
                <p className="card-text">Trade cryptocurrencies with an intuitive and user-friendly interface.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Secure Platform</h5>
                <p className="card-text">Your security is our priority with advanced encryption technology.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">Our dedicated team is always available to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
