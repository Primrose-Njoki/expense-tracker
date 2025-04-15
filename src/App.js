import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };
    setExpenses([newExpense, ...expenses]);
    setFormData({
      title: '',
      description: '',
      amount: '',
      date: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      <form onSubmit={handleSubmit} className="expense-form">
        <h2>Expense Title</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter title"
          required
        />
        
        <h3>Description</h3>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter description"
        />
        
        <h3>Amount</h3>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          required
          min="0"
          step="0.01"
        />
        
        <h3>Date</h3>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                {searchTerm ? 'No matching expenses found' : 'No expenses added yet'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;