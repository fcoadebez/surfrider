import React, { Component } from "react";

import Footer from "../src/components/Footer/Footer";
import "./styles/main.less";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
