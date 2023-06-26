import { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm(props){
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });
    const titleChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState, title: event.target.value}})
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState,amount: event.target.value}})
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{return {...prevState,date:event.target.value}})
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput(()=>{return {title:'',amount:'',date:''}})
    }
    return (
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title" >Enter title here.</label>
                <input value={userInput.title} onChange={titleChangeHandler} id="title" type="text" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="amount" >Enter amount here.</label>
                <input value={userInput.amount} onChange={amountChangeHandler} id="amount" type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="date" >Enter date here.</label>
                <input value={userInput.date} onChange={dateChangeHandler} id="date" type="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button onClick={formSubmitHandler}>Add Expense</button>
                </div>
            </form>  
    )
}

export default ExpenseForm;
