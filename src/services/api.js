const API_URL = process.env.REACT_APP_API_URL

export const getUsers = async () => {
    return fetch(API_URL, {
        headers: {
            'interview-id': 'test'
        }
    })
    .then((response) => response.json())
}

export const createUser = async (user) => {
    return fetch(API_URL, {
        method: 'post',
        headers: {
            'interview-id': 'test',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) => response.json())
}

export const deleteUser = async (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'delete',
        headers: {
            'interview-id': 'test',
        },
    })
    .then((response) => response.json())
}
