//@flow

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './NavigationBar'
import NavigationView from './NavigationView'


function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <NavigationBar/>
      <NavigationView/>
    </Router>
  );
}

export default App;
