import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={...enteredExpenseData,id:crypto.randomUUID()}
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;