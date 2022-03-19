import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((usersList) => {
      return [...usersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });

  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
