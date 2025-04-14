import React from 'react';

const ExpenseItem=({item})=>{ // receives a single expense item object as a prop

    // renders table row(<tr>) with items details(<td>) in between
    return (
        <tr>
            <td>{item.title} </td>
            <td>{item.describtion}</td>
            <td>${item.amount}</td>
            <td>{item.date}</td>
        </tr>
    );
};

export default ExpenseItem;