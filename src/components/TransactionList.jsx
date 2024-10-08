import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TransactionList.css';

const TransactionList = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <div className="transaction-list-container">
      <h3>Transaction List</h3>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`transaction-item ${
              transaction.amount < 0 ? 'expense' : 'income'
            }`}
          >
            <span>{transaction.description}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
