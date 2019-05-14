import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders fine', () => {
    render(<App />)
  })

  it('should display hello world', () => {
    const { queryByText } = render(<App />)

    queryByText(/hello world!/i)
  })

  it('should greet the team', () => {
    const { getByText } = render(<App />)

    const button = getByText(/greet/i)
    fireEvent.click(button)

    getByText(/hello web 18/i)
  })
})
