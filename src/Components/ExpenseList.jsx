import React from "react";
import ExpenseItem from './ExpenseItem';
const ExpenseList=({expenses}) => { //takes expenses prop & maps through it to render each item
    
    // basic HTML table
    
    return (
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
                {expenses.map((item)=>(
                    <ExpenseItem key={item.id} item={item}/> ))}

            </tbody>
        </table>
    );
};
    
export default ExpenseList;