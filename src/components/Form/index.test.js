import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Form } from './'

describe('Form', () => {
    it('Should render Form correctly', () => {
        const { container, getByPlaceholderText } = render(<Form />)

        expect(container).toMatchSnapshot()
        expect(getByPlaceholderText(`Input glover's name`)).toBeInTheDocument()
    })

    it('Should be able to type a user name', () => {
        const { getByPlaceholderText } = render(<Form />)
        const input = getByPlaceholderText(`Input glover's name`);

        fireEvent.change(input, { target: {value: 'Test User'}})

        expect(input.value).toBe('Test User')
    })

    it('Should be able to add a user', () => {
        const mockedFunction = jest.fn()
        const { getByRole, getByPlaceholderText } = render(<Form addUser={mockedFunction}/>)
        const input = getByPlaceholderText(`Input glover's name`);
        const button = getByRole('button', { type: 'submit'})

        fireEvent.change(input, { target: {value: 'Test User'}})
        fireEvent.click(button)

        expect(mockedFunction).toBeCalledWith({
            name: 'Test User'
        })
    })
})
