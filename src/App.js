import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const date = new Date;
  const title = 'Expense title';
  const amount = '1200';
  return (
    <div>
      <NewExpense />
      <h2>Let's get started!</h2>
      <ExpenseItem date={date} title={title} amount={amount}></ExpenseItem>
    </div>
  );
}

export default App;