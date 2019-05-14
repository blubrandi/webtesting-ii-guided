import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;