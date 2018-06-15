import React, { Component } from "react";
import "./feature.less"

export default class FeatureTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = () => {
    
  };

  render() {
    return (
      <div className="feature_title">
        <h2 dangerouslySetInnerHTML={{ __html: this.props.title }}></h2>
      </div>
    );
  }
}
