import React from 'react';
import { Pie } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { Chart, registerables } from 'chart.js';
import './ExpenseChart.css'; // Import the CSS file

Chart.register(...registerables); // Register the necessary components

const ExpenseChart = () => {
    const { transactions } = useContext(GlobalContext);
    
    const incomeTotal = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, curr) => acc + curr.amount, 0);

    const expenseTotal = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, curr) => acc + curr.amount, 0) * -1;

    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [{
            data: [incomeTotal, expenseTotal],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
        }]
    };

    return (
        <div className="expense-chart-container">
            <h3>Expense Chart</h3>
            <Pie data={data} />
        </div>
    );
};

export default ExpenseChart;
