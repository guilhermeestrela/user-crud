import React, { useState } from 'react'
import './styles.css'

export const Form = ({addUser}) => {
    const [ name, setName ] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const newUser = {
            name
        }
        
        addUser(newUser)
        setName('')
    }

    function handleChange(event){
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" placeholder="Input glover's name" value={name} onChange={handleChange} />
            <button type="submit" className="primary-button">ADD</button>
        </form>
    )
}
