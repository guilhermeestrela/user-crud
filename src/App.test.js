import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'

describe('App', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ 
                    1637098364443: {
                        id: 1637098364443,
                        name: "Test User"
                    } 
                }),
            })
        );
    })

    it('Should render App correctly', async () => {
        const { container, getByText } = render(<App />)

        await waitFor(() => getByText('Test User'))

        expect(container).toMatchSnapshot()
        expect(getByText('Test User')).toBeInTheDocument()
    })
})
