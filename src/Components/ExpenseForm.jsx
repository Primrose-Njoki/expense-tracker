//users input data
import react,{useState} from 'react;'
const ExpenseForm =({onAddExpense})=> { //ExpenseForm is a component that takes a prop(onAddExpense)
// variables holding the form input values
    const[title,setTitle]=useState('');
    const[describtion,setDescribtion]=useState('');
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');

    const handleSubmit=(e)=>{ // prevents the page from refreshing
        e.preventDefault();
        
        if(!title || !describtion || !amount || !date) return; //if the field is empty the form won't submit

        onAddExpense({ // creates new expense sends to the App using(onAddExpenses)
            id:Date.now(),
            title,
            describtion,
            amount,
            date,

        });

        setTitle(''); // resets for users to add new item
        setDescribtion('');
        setAmount('');
        setDate('');
    };
    return ( //renders the form and attaches the handleSubmit to onSubmit event
   
        <form onSubmit={handleSubmit}> 
        
        
    
        <input 
        type="text" // determines the input eg.text,date,number
        placeholder='Expense Title'//shows the hint
        value={title} // onChange updates state as user types
        onChange={(e)=>setTitle(e.target.value)}/>  

        <input
        type='text'
        placeholder='Description'
        value={describtion}
        onChange={(e)=>setDescribtion(e.target.value)}/>

        <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}/>

        <input
        type='date'
        value={date}
        onChange={(e)=> setDate(e.target.value)}/>

        
        <button type='submit'>Submit</button> 

        </form> 
    );
};
export default ExpenseForm; // makes this component available for use in other files 
   

    

    

