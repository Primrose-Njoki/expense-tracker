import React, {useState} from 'react'; //imported for state management
import ExpenseForm from './ExpenseForm';// These are the2 imported components
import ExpenseList from './ExpenseList';
import './App.css';

//Empty Arrays:
//expense holds the expense items
//setExpense updates the list
function App() {
  const [expenses,setExpenses] = useState([]);
  
  const addExpense =(expense) => {  //adds new expenses
    setExpenses ([expenses, ...expenses]);

    // header;passing addExpense with a prop(onAddExpense);passing expenses with a prop(expenses)
    return (
      <div className='container'>
        <h1>Expense Tracker</h1> 
        <ExpenseForm onAddExpense={addExpense}/>      passing addExpense with a prop(onAddExpense)
        <ExpenseList expenses={expenses}/>
      
      </div>
    );


  }
}
export default App; 