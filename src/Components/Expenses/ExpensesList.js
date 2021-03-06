import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No item found!</h2>;
  }
  return props.items.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    </ul>
  ));
};

export default ExpensesList;
