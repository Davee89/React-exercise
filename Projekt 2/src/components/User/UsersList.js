import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  const listOfUsers = props.users.map((user) => (
    <li key={Math.random().toString()}>
      {user.username} ({user.age} years old)
    </li>
  ));
  console.log(props.users);

  return (
    <Card className={styles.users}>
      <ul>{listOfUsers}</ul>
    </Card>
  );
};

export default UserList;
