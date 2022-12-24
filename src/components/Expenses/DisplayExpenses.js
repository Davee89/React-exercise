import "./DisplayExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";

const DisplayExpenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem title={props.title[0]} amount={props.amount[0]} date={props.date[0]}></ExpenseItem>
      <ExpenseItem title={props.title[1]} amount={props.amount[1]} date={props.date[1]}></ExpenseItem>
      <ExpenseItem title={props.title[2]} amount={props.amount[2]} date={props.date[2]}></ExpenseItem>
      <ExpenseItem title={props.title[3]} amount={props.amount[3]} date={props.date[3]}></ExpenseItem>
    </Card>
  );
};

export default DisplayExpenses;

const repeat = "YOU NEED TO REPEAT THE COURSE...";
