import React from 'react';

const ExpenseItem = ({ item }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>${item.amount}</td>
      <td>{item.date}</td>
    </tr>
  );
};

export default ExpenseItem;
