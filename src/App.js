import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const date = new Date;
  const title = 'Expense title';
  const amount = '1200';
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={date} title={title} amount={amount}></ExpenseItem>
    </div>
  );
}

export default App;