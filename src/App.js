import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./key-value";
import KeyValue from "./key-value";

var data = [
  { key: "key1", value: "value1" },
  { key: "key2", value: "value1" },
  { key: "key3", value: "value3" }
];

class App extends Component {
  state = {
    data
  };
  render() {
    return (
      <KeyValue
        key={this.state.data.key}
        data={this.state.data}
        onReset={this.HandleReloadClick}
        onSubmit={this.HandleSubmitClick}
      ></KeyValue>
    );
  }
  HandleReloadClick = value => {
    console.log("Handle Reset - Value :", value);
  };

  HandleSubmitClick = value => {
    console.log("Handle Submit Value :", value);
  };
}

export default App;

{
  /* <div className="App">
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
    Learn React by Manish
  </a>
</header>
</div> */
}
