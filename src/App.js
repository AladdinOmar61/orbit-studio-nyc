import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
//remove this comment when merging ;) - Sam
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
