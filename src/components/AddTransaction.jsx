import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css'; // Importing the CSS file

const AddTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(true);
  const [error, setError] = useState(''); // To handle any error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure description and amount are provided
    if (description.trim() === '' || amount === '') {
      setError("Please provide both description and amount.");
      return;
    }

    const newTransaction = {
      id: Math.random(),
      description,
      amount: isIncome ? +amount : -Math.abs(amount),
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

    // Reset form fields
    setDescription('');
    setAmount('');
    setError('');
  };

  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="transaction-type">
          <label>
            <input 
              type="radio" 
              value="income" 
              checked={isIncome} 
              onChange={() => setIsIncome(true)} 
            />
            Income
          </label>
          <label>
            <input 
              type="radio" 
              value="expense" 
              checked={!isIncome} 
              onChange={() => setIsIncome(false)} 
            />
            Expense
          </label>
        </div>

        <button type="submit">Add Transaction</button>

        {error && <div className="error">{error}</div>} {/* Display error if any */}
      </form>
    </div>
  );
};

export default AddTransaction;
