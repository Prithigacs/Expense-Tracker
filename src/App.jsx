import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Header from './components/Header';
import ExpenseChart from './components/ExpenseChart'; // Import ExpenseChart
import './App.css';


const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <ExpenseChart /> {/* Add ExpenseChart here */}
        <TransactionList />
      </div>
    </GlobalProvider>
  );
};

export default App;
