import React, { Component } from "react";
import Header from "../src/components/Header/Header";
import "./styles/main.less";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
