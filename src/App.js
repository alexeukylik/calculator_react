import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './Components/Calc/Calc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Calculater</h1>
        </header>  
        <Calc />       
      </div>
    );
  }
}

export default App;
