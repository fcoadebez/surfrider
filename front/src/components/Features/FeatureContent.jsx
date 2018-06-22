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
        <p dangerouslySetInnerHTML={{ __html: this.props.content.content }}></p>
        { this.props.content.link &&
          <a href={this.props.content.link.url}>{this.props.content.link.title}</a>
        }

      </div>
    );
  }
}
