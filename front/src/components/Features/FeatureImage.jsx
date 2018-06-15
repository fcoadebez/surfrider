import React, { Component } from "react";
import "./feature.less"

export default class FeatureImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentWillMount = () => {
    
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.image.map(image => {
            let blocElements = [];
            blocElements.push(<img src={ image.image.url }/>);
            return blocElements;
          })}
      </div>
    );
  }
}
