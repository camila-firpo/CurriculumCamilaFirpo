import './App.css';
import React, { Component } from 'react';
import PersonInfo from './components/PersonInfo';
import Contents from './components/Contents';

class App extends Component {
  render() {
    return (
      <div>
        <PersonInfo />
        <Contents />
      </div>) 

  }

}


export default App;
