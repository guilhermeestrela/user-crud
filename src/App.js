import React, {useEffect, useState} from 'react'
import { Form } from './components/Form'
import { UserList } from './components/UserList';
import './App.css';
import { getUsers, createUser, deleteUser } from './services/api'

function App() {
  const [ users, setUsers ] = useState([])

  const getApiUsers = async () => {
      const userList = await getUsers()
      const tmpArray = []
      for (let key in userList) {
          tmpArray.push(userList[key])
      }
      setUsers(tmpArray)
  }

  const addUser = async (user) => {
    const result = await createUser(user)
    if (result.status === 'ok') {
      getApiUsers()
    }
  }

  const removeUser = async (id) => {
    const result = await deleteUser(id)
    if (result.status === 'ok') {
      getApiUsers()
    }
  }

  useEffect(() => {
     getApiUsers()
    }, [])
    
  return (
    <div className="App">
      <div className="container">
        <Form addUser={addUser} />
        <UserList users={users} removeUser={removeUser}/>
      </div>
    </div>
  );
}

export default App;
