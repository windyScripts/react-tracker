import { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm(){
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState, enteredTitle: event.target.value}})
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState,enteredAmount: event.target.value}})
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState,enteredDate:event.target.value}})
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(userInput);
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
                <button onClick={formSubmitHandler}>Add Expense</button>
                </div>
            </form>
            
    )
}

export default ExpenseForm;