import './ExpenseForm.css'

function ExpenseForm(){

    return (
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title" >Enter title here.</label>
                <input id="title" type="text" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="amount" >Enter amount here.</label>
                <input id="amount" type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                <label htmlFor="date" >Enter date here.</label>
                <input id="date" type="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <button>Add Expense</button>
                </div>
            </form>
            
    )
}

export default ExpenseForm;