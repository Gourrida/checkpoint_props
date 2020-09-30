import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile>
        <p>this is children prop </p>
      </Profile>
    </div>
  );
}

export default App;
