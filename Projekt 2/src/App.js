import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <div>
      <AddUser getUsers={getUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
