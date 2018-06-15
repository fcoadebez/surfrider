import React, { Component } from "react";
import "./feature.less";
import Content from "./FeatureContent";
import Image from "./FeatureImage";

export default class FeatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentWillMount = () => {
    
  };

  render() {
    console.log(this.props.bloc)
    return (
      
      <div className="feature_container">
        <Content title={this.props.bloc.title} content={this.props.bloc.content} />
        <Image image={this.props.bloc.images} />
      </div>
    );
  }
}
