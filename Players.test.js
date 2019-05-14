import React from 'react'
import { render } from 'react-testing-library'

import Players from './players'

describe('<Players />', () => {
    it('should render no players available if no players provide', () => {
        const { getByText } = render(<Players />)

        getByText(/np players available/i)
    })
})