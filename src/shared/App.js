import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <div className="App-header-text">
            <h2>Rich Oh</h2>
            <div className="App-header-subtext">
              <p>a software engineer</p>
              <p>in los angeles</p>
            </div>
          </div>
        </div>

        <div className="app-body">

          <ul className="menu collection">
            <a className="collection-item active">About</a>
            <a className="collection-item">Ongoing</a>
            <a className="collection-item">Lab</a>
            <a className="collection-item">Contact</a>
          </ul>

          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
