import React, {useState} from 'react';
import './App.css';
import UserTable from './UserTable'

function App() {
  const [user, setUser] = useState({})

  const getUserData = () => {
    console.log("fetching data")
    fetch('https://api.github.com/users/hhimanshu')
    .then(res => res.json())
    .then(user => setUser(user))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUserData}>Fetch</button>
        <UserTable user={user}/>
      </header>
    </div>
  );
}

export default App;
