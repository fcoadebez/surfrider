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
      <div className="feature_content">
        <p dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
      </div>
    );
  }
}
