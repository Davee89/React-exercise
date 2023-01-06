import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [inputData, setInputData] = useState({ username: "", age: "" });

  const [error, setError] = useState("");

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addNewUser = (e) => {
    e.preventDefault();
    if (inputData.username.trim().length === 0 || inputData.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty calues).",
      });
      return;
    }
    if (+inputData.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (Higher than 0).",
      });
      return;
    }
    props.getUsers(inputData);
    setInputData({ username: "", age: "" });
  };

  const onClick = () => {
    setError("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={onClick} />}
      <Card className={styles.input}>
        <form onSubmit={addNewUser}>
          <label htmlFor="username">Username</label>
          <input onChange={inputChangeHandler} type="text" id="username" name="username" value={inputData.username} />
          <label htmlFor="age">Age</label>
          <input onChange={inputChangeHandler} type="number" id="age" name="age" value={inputData.age} />
          <Button type="submit">Add New User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
