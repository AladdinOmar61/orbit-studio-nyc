import React, { Component } from "react";
import "./App.css";
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <div className="App">
      <Header/>
    </div>;
  }
}

export default App;
