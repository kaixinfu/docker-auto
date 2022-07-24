import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [users, setUsers] = useState([]);
  const fnFetchUsers = async () => {
    const res = await axios.get("/api/users");
    console.log("res", res);
    if (res && res.data) {
        setUsers(res.data)
    }
  };
  useEffect(() => {
    fnFetchUsers();
  }, []);
  if (!users.length) return null;
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.name}>
            name: {user.name}, age: {user.age}
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
