import "./DisplayExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "./FilterExpenses.js";
import { useState } from "react";

const DisplayExpenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2022");

  const onChangeHandler = (e) => {
    setPickedYear(e.target.value);
  };

  console.log(props.items);
  const expensesList = props.items.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);

  return (
    <Card className="expenses">
      <ExpensesFilter year={pickedYear} onYear={onChangeHandler} />
      {expensesList}
    </Card>
  );
};

export default DisplayExpenses;
