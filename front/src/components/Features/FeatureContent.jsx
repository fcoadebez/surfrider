import React, { Component } from "react";
import "./feature.less"

export default class FeatureContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentWillMount = () => {
    
  };

  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.content }</p>
      </div>
    );
  }
}
