import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [inputData, setInputData] = useState({ username: "", age: "" });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addNewUser = (e) => {
    e.preventDefault();
    if (inputData.username.trim().length === 0 || inputData.age.trim().length === 0) {
      console.log("please write all info before submiting");
      return;
    }
    if (+inputData.age < 1) {
      console.log("Age cannot be lower than 1");
      return;
    }
    props.getUsers(inputData);
    setInputData({ username: "", age: "" });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addNewUser}>
        <label htmlFor="username">Username</label>
        <input onChange={inputChangeHandler} type="text" id="username" name="username" value={inputData.username} />
        <label htmlFor="age">Age</label>
        <input onChange={inputChangeHandler} type="number" id="age" name="age" value={inputData.age} />
        <Button type="submit">Add New User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
