import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={title:enteredExpenseData.title,amount:enteredExpenseData.amount,date:new Date(enteredExpenseData.date),id:crypto.randomUUID()}
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;
