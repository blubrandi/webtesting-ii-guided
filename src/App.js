import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Players from '../players'

function App() {
  const [greeting, setGreeting] = useState('')

  const greet = () => {
    setGreeting('hello web 18')
  }

  return (
    <div className='App'>
      <h3>Hello World!</h3>
      <div>
        <button onClick={greet}>Greet</button>
      </div>
      <h4>{greeting}</h4>
      <Players />
    </div>
  );
}

export default App;