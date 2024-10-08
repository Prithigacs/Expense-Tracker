import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Balance.css'; // Import the CSS file

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Determine the class for balance color
  const balanceClass = total < 0 ? 'negative' : 'positive';

  return (
    <div className="balance-container">
      <h4>Your Balance</h4>
      <h1 className={balanceClass}>${total}</h1>
    </div>
  );
};

export default Balance;
