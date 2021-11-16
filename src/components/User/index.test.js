import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { User } from './'

describe('User', () => {
    it('Should render User correctly', () => {
        const userMock = {
            id: 1637098364443,
            name: "Test User",
        }
        const { container, getByText } = render(<User user={userMock} />)

        expect(container).toMatchSnapshot()
        expect(getByText('Test User')).toBeInTheDocument()
    })
})
