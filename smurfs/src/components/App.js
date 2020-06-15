import React, { Component } from "react";
import "./App.css";

import SmurfDisplay from "./SmurfDisplay";
import SmurfForm from "./SmurfForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome you your Smurf Village</h1>
        <SmurfForm />
        <SmurfDisplay />
      </div>
    );
  }
}

export default App;
