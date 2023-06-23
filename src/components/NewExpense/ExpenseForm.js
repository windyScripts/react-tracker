import { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm(){
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState(0);
    const [enteredDate,setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    return (
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title" >Enter title here.</label>
                <input onChange={titleChangeHandler} id="title" type="text" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="amount" >Enter amount here.</label>
                <input onChange={amountChangeHandler} id="amount" type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="date" >Enter date here.</label>
                <input onChange={dateChangeHandler} id="date" type="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <button>Add Expense</button>
                </div>
            </form>
            
    )
}

export default ExpenseForm;