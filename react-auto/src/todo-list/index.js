import React, { useEffect, useState } from "react";
import { getUsers } from "../api";

const Todo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fnFetchUsers = async () => {
    setLoading(true);
    const res = await getUsers();
    setLoading(false);
    console.log("res", res);
    if (res && res.data) {
      setUsers(res.data);
    }
  };
  useEffect(() => {
    fnFetchUsers();
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
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
