import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {
  const saveExpenseData = (PreExpense) => {
    const expenseData = {
      ...PreExpense,
      id: Math.random().toString(),
    };
    props.onAddData(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
