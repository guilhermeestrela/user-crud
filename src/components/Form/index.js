import React, { useState } from 'react'

export const Form = ({addUser}) => {
    const [ name, setName ] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const newUser = {
            name
        }
        
        addUser(newUser)
    }

    function handleChange(event){
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Input glover's name" value={name} onChange={handleChange} />
            <button type="submit">ADD</button>
        </form>
    )
}
