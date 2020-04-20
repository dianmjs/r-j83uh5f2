import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numChar: 0,
    };
    this.counter = this.counter.bind(this);
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.counter}></textarea>
        <div className="counter">{this.state.numChar}</div>
      </div>
    );
  }
  counter(event) {
    this.setState({
      numChar: event.target.value.length,
    });
  }
}

export default App;
