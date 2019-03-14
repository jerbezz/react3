import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Buttons from "./Buttons"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Buttons/>
      </div>
    );
  }
}

export default App;
