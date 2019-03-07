import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Counter from "./Components/Counter";

const AppCounter = styled.div``;

class App extends Component {
  state = {
    counter: 0,
    appName: "React js"
  };

  onClickAddValueHandler = arg => {
    this.setState({
      counter: this.state.counter + arg
    });
  };
  resetHanlder = () => {
    this.setState({
      counter: 0
    });
  };

  onClickDeleteValueHandler = arg => {
    this.setState({
      counter: this.state.counter - arg
    });
  };

  render() {
    return (
      <AppCounter className="App">
        <button onClick={this.resetHanlder}>Reset</button>
        <Counter
          style={{ border: "1px solid green" }}
          value={this.state.counter}
          clicked={() => this.onClickAddValueHandler(2)}
          deleted={this.onClickDeleteValueHandler.bind(this, 10)}
        />
      </AppCounter>
    );
  }
}

export default App;
