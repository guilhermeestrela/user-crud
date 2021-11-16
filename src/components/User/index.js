import React from 'react'
import './styles.css'

export const User = ({ user, removeUser }) => {
    function handleOnClick() {
        removeUser(user.id)
    }
    return (
        <li className="user-item">
            <p className="user-name">{user.name}</p>
            <button className="secondary-button" onClick={handleOnClick}>Remove</button>
        </li>
    )
}
