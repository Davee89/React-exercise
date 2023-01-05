import "./DisplayExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "./FilterExpenses.js";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const DisplayExpenses = (props) => {
  const [year, setYear] = useState("");

  const onChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === year);
  const expensesList = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);

  return (
    <Card className="expenses">
      <ExpensesFilter onYear={onChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesList}
    </Card>
  );
};

export default DisplayExpenses;
