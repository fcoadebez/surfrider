import React, { Component } from "react";
import "./item.less";

export default class Bandeau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    return (
      <a href="#">
        <div className="item">
        <img src={this.props.icon} alt=""/>
        <p>{this.props.title}</p>
        </div>
      </a>
    );
  }
}
