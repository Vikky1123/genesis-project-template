import React, { useEffect, useState } from "react";

const firstNames = [
  "John", "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "Lucas", "Mia", "Alexander", "Charlotte", "Benjamin", "Amelia", "Elijah", "Harper", "William", "Evelyn", "James", "Abigail", "Sebastian", "Emily", "Jack", "Elizabeth", "Owen", "Sofia", "Daniel", "Avery", "Jackson", "Ella", "Samuel", "Madison", "Dylan", "Scarlett", "Nathan", "Victoria", "Isaac", "Aria", "Kai", "Grace", "Adrian", "Chloe", "Leo", "Penelope", "Gabriel", "Layla", "Julian", "Riley"
];
const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
];
const plans = [
  "Basic Plan", "Silver Plan", "Gold Plan", "Platinum Plan", "Diamond Plan", "Elite Plan", "VIP Plan", "Pro Plan", "Enterprise Plan", "Trader Plan", "Master Plan", "Premium Plan"
];

const transactionTypes = [
  { type: "deposit", action: "deposited", weight: 30, min: 450, max: 2500 },
  { type: "withdrawal", action: "withdrew", weight: 25, min: 780, max: 2700 },
  { type: "upgrade", action: "upgraded to", weight: 15 },
  { type: "profit", action: "earned", weight: 20, min: 310, max: 1200 },
  { type: "reinvestment", action: "reinvested", weight: 10, min: 950, max: 3000 }
];

function getRandomName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last.charAt(0)}.`;
}

function getRandomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTransaction() {
  // Weighted random selection
  const totalWeight = transactionTypes.reduce((sum, t) => sum + t.weight, 0);
  let random = Math.random() * totalWeight;
  let selectedType = transactionTypes[0];
  for (const t of transactionTypes) {
    random -= t.weight;
    if (random <= 0) {
      selectedType = t;
      break;
    }
  }
  const name = getRandomName();
  if (selectedType.type === "upgrade") {
    return {
      type: "upgrade",
      name,
      action: selectedType.action,
      plan: plans[Math.floor(Math.random() * plans.length)],
      time: new Date().toLocaleTimeString()
    };
  } else if (selectedType.type === "profit") {
    return {
      type: "profit",
      name,
      action: selectedType.action,
      amount: getRandomAmount(selectedType.min, selectedType.max),
      time: new Date().toLocaleTimeString()
    };
  } else {
    return {
      type: selectedType.type,
      name,
      action: selectedType.action,
      amount: getRandomAmount(selectedType.min, selectedType.max),
      time: new Date().toLocaleTimeString()
    };
  }
}

function formatTransaction(transaction) {
  if (transaction.type === "upgrade") {
    return `${transaction.name} ${transaction.action} ${transaction.plan}`;
  } else if (transaction.type === "profit") {
    return `${transaction.name} ${transaction.action} $${transaction.amount} in profit today`;
  } else {
    return `${transaction.name} ${transaction.action} $${transaction.amount}`;
  }
}

const TRANSACTION_COUNT = 6;

const TransactionFeed = () => {
  const [transactions, setTransactions] = useState(() =>
    Array.from({ length: TRANSACTION_COUNT }, getRandomTransaction)
  );

  useEffect(() => {
    const updateFeed = () => {
      setTransactions(transactions =>
        transactions.map(() => getRandomTransaction())
      );
    };
    const interval = setInterval(() => {
      updateFeed();
    }, Math.random() * 3000 + 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feature feature--style1 padding-bottom padding-top bg-color">
      <div className="container">
        <div className="feature__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-md-6 col-lg-5"></div>
            <div className="col-md-6 col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="feature__shape">
        <span className="feature__shape-item feature__shape-item--1">
          <img decoding="async" src="/wp-content/uploads/2023/10/features_shape.png" width="70" alt="shape-icon" />
        </span>
        <span className="feature__shape-item feature__shape-item--2"> <span></span> </span>
      </div>
      <div className="roadmap--style1">
        <div className="roadmap__wrapper">
          <div className="row gy-4 gy-md-0 gx-5">
            {transactions.map((transaction, idx) => (
              <div className="col-md-6 offset-md-6" key={idx}>
                <div
                  className={`roadmap__item ms-md-4 ${transaction.type}`}
                  data-aos="fade-left"
                  data-aos-duration={800 + idx * 100}
                >
                  <h3>{formatTransaction(transaction)}</h3>
                  <p>Transaction completed at {transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .roadmap__item.deposit { border-left: 3px solid #4CAF50; }
        .roadmap__item.withdrawal { border-left: 3px solid #f44336; }
        .roadmap__item.upgrade { border-left: 3px solid #2196F3; }
        .roadmap__item.profit { border-left: 3px solid #FFC107; }
        .roadmap__item.reinvestment { border-left: 3px solid #9C27B0; }
      `}</style>
    </section>
  );
};

export default TransactionFeed;
