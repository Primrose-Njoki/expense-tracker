import React from 'react';
import './ExpenseList.css';
function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;