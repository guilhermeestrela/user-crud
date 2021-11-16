import React from 'react'
import { User } from '../User'
import './styles.css'

export const UserList = ({users, removeUser}) => {
    return (
        <ul className="user-list">
            {users.map((user)=> (
                <User user={user} key={user.id} removeUser={removeUser}/>
            ))}
        </ul>
    )
}
