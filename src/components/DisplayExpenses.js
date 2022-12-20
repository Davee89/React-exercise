import "./DisplayExpenses.css";
import ExpenseItem from "./ExpenseItem";

function DisplayExpenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem title={props.title[0]} amount={props.amount[0]} date={props.date[0]}></ExpenseItem>
      <ExpenseItem title={props.title[1]} amount={props.amount[1]} date={props.date[1]}></ExpenseItem>
      <ExpenseItem title={props.title[2]} amount={props.amount[2]} date={props.date[2]}></ExpenseItem>
      <ExpenseItem title={props.title[3]} amount={props.amount[3]} date={props.date[3]}></ExpenseItem>
    </div>
  );
}

export default DisplayExpenses;
