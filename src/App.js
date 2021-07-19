import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const count = 88;
const perem = 'Переменная';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p style={{
            color: 'blue'
          }}>
            Hello world!
          </p>
          <p> {perem} </p>
          <p> {count} </p>
          <p> {43 + 23} </p>
          <p> {23 > 50 || 90 > 50} </p>
          <p> {{count} > 25 ? 'меньше' : 'больше'} </p>
          <p> {undefined} {null} {false} {true}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }  
}

export default App;
