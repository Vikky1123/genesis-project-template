
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TransactionFeed = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AOS.init();

    // Generate initial transactions
    generateTransactions();

    // Update transactions periodically
    const interval = setInterval(() => {
      generateTransactions();
    }, Math.random() * 3000 + 5000);

    return () => clearInterval(interval);
  }, []);

  const generateTransactions = () => {
    const firstNames = ["John", "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
    const plans = ["Basic Plan", "Silver Plan", "Gold Plan", "Platinum Plan", "Diamond Plan", "Elite Plan"];
    const transactionTypes = [
      { type: "deposit", weight: 30, min: 450, max: 2500 },
      { type: "withdrawal", weight: 25, min: 780, max: 2700 },
      { type: "upgrade", weight: 15, plans: plans },
      { type: "profit", weight: 20, min: 310, max: 1200 },
      { type: "reinvestment", weight: 10, min: 950, max: 3000 }
    ];

    const generateRandomName = () => {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${firstName} ${lastName.charAt(0)}.`;
    };

    const generateRandomAmount = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const generateTransaction = () => {
      // Weighted random selection
      const totalWeight = transactionTypes.reduce((sum, type) => sum + type.weight, 0);
      let random = Math.random() * totalWeight;
      let selectedType;

      for (const type of transactionTypes) {
        random -= type.weight;
        if (random <= 0) {
          selectedType = type;
          break;
        }
      }

      const name = generateRandomName();
      let transaction;

      switch (selectedType.type) {
        case "upgrade":
          transaction = {
            name: name,
            action: "upgraded to",
            plan: selectedType.plans[Math.floor(Math.random() * selectedType.plans.length)],
            type: "upgrade",
            time: new Date().toLocaleTimeString()
          };
          break;
        case "profit":
          transaction = {
            name: name,
            action: "earned",
            amount: generateRandomAmount(selectedType.min, selectedType.max),
            type: "profit",
            time: new Date().toLocaleTimeString()
          };
          break;
        default:
          transaction = {
            name: name,
            action: selectedType.type === "deposit" ? "deposited" : 
                  selectedType.type === "withdrawal" ? "withdrew" : "reinvested",
            amount: generateRandomAmount(selectedType.min, selectedType.max),
            type: selectedType.type,
            time: new Date().toLocaleTimeString()
          };
      }

      return transaction;
    };

    // Generate 6 random transactions
    const newTransactions = Array(6).fill(null).map(() => generateTransaction());
    setTransactions(newTransactions);
  };

  const formatTransaction = (transaction) => {
    if (transaction.type === "upgrade") {
      return `${transaction.name} ${transaction.action} ${transaction.plan}`;
    } else if (transaction.type === "profit") {
      return `${transaction.name} ${transaction.action} $${transaction.amount} in profit today`;
    } else {
      return `${transaction.name} ${transaction.action} $${transaction.amount}`;
    }
  };

  return (
    <div className="elementor-element bg-color e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-widget__width-inherit elementor-absolute h-100 elementor-widget elementor-widget-bg-shapes">
          <div className="elementor-widget-container">
            <div className="roadmap--style1">
              <span className="roadmap__shape-item roadmap__shape-item--1">
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-widget__width-auto elementor-absolute upAndDown_animation elementor-widget elementor-widget-image">
          <div className="elementor-widget-container">
            <img decoding="async" width="106" height="106" src="/assets/img/uploads/2023/10/shape01-2.png" className="attachment-full size-full wp-image-238" alt="" />
          </div>
        </div>
        <div className="elementor-element e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-widget elementor-widget-tg-heading">
              <div className="elementor-widget-container">
                <div className="section-title">
                  <h2 className="title">Live User <span>Transactions</span></h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default">See what our community is doing in real-time. Updated constantly with the latest user deposits and withdrawals.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-widget elementor-widget-genix-roadmap">
          <div className="elementor-widget-container">
            <style>
              {`
                .roadmap__item.deposit { border-left: 3px solid #4CAF50; }
                .roadmap__item.withdrawal { border-left: 3px solid #f44336; }
                .roadmap__item.upgrade { border-left: 3px solid #2196F3; }
                .roadmap__item.profit { border-left: 3px solid #FFC107; }
                .roadmap__item.reinvestment { border-left: 3px solid #9C27B0; }
              `}
            </style>
            <div className="roadmap--style1">
              <div className="roadmap__wrapper">
                <div className="row gy-4 gy-md-0 gx-5">
                  {transactions.length > 0 ? (
                    transactions.map((transaction, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div className={`col-md-6 ${isEven ? 'offset-md-6' : ''}`} key={index}>
                          <div 
                            className={`roadmap__item ${!isEven ? 'roadmap__item--style2 ms-auto me-md-4' : 'ms-md-4'} ${transaction.type}`} 
                            data-aos={isEven ? 'fade-left' : 'fade-right'} 
                            data-aos-duration="800"
                          >
                            <div className="roadmap__item-inner">
                              <div className="roadmap__item-content">
                                <div className="roadmap__item-header">
                                  <h3>{formatTransaction(transaction)}</h3>
                                </div>
                                <p>Transaction completed at {transaction.time}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    Array(6).fill(null).map((_, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div className={`col-md-6 ${isEven ? 'offset-md-6' : ''}`} key={index}>
                          <div 
                            className={`roadmap__item ${!isEven ? 'roadmap__item--style2 ms-auto me-md-4' : 'ms-md-4'}`} 
                            data-aos={isEven ? 'fade-left' : 'fade-right'} 
                            data-aos-duration="800"
                          >
                            <div className="roadmap__item-inner">
                              <div className="roadmap__item-content">
                                <div className="roadmap__item-header">
                                  <h3>Loading transactions...</h3>
                                </div>
                                <p>Please wait while we fetch the latest updates...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFeed;
