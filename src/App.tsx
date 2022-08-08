import React from 'react';
import logo from './img/LP_Retro_Logo.jpg';
import Recipe from './components/recipe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.lollyspantry.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Lolly&apos;s Pantry
        </a>
      </header>
      <Recipe />
    </div>
  );
}

export default App;
