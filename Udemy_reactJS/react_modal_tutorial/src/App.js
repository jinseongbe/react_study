import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHander = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHander} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
