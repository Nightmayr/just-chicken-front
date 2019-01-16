import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Navigation/> */}
          <Navbar />
          {/* replace with custom logo */}
          {/* <img src={logo} className="App-logo" alt="logo" />  */}
        </header>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
