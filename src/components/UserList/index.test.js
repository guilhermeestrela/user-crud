import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { UserList } from './'

describe('UserList', () => {
    it('Should render UserList correctly', () => {
        const usersMock = [
            {
                id: 1637098364443,
                name: "Test User",
            }
        ]
        const { container, getByText } = render(<UserList users={usersMock} />)

        expect(container).toMatchSnapshot()
        expect(getByText('Test User')).toBeInTheDocument()
    })
})
