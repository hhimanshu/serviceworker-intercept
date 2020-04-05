import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getUserData = () => {
    console.log("fetching data")
    fetch('https://api.github.com/users/hhimanshu')
    .then(res => res.json())
    .then(user => console.table(user))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUserData}>Fetch</button>
      </header>
    </div>
  );
}

export default App;
