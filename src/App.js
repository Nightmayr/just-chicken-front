import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import RestaurantCard from './RestaurantCard';

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
        <div class="container">
        <Jumbotron />
          <RestaurantCard />
          </div>
      </div>
    );
  }
}

export default App;
