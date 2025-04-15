import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title,
      description,
      amount: parseFloat(amount),
      date,
      id: Date.now()
    };
    onAddExpense(newExpense);
    setTitle('');
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Expense Title</h2>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </div>
      
      <h3>Description</h3>
      <div className="form-group">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>
      
      <h3>Amount</h3>
      <div className="form-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          min="0"
          step="0.01"
        />
      </div>
      
      <div className="form-group">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;