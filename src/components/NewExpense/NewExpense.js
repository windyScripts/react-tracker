import {useState} from 'react';

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing,setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={title:enteredExpenseData.title,amount:enteredExpenseData.amount,date:new Date(enteredExpenseData.date),id:crypto.randomUUID()}
        props.onAddExpense(expenseData);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;
