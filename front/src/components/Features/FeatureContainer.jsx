import React, { Component } from "react";
import "./feature.less";
import Title from "./FeatureTitle";
import Content from "./FeatureContent";
import Image from "./FeatureImage";

export default class FeatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [],
      scrollTop: 0
    };
  }

  componentDidMount = () => {
    this.setState({scrollTop: document.getElementById(this.props.id).getBoundingClientRect().top + window.pageYOffset});
  };

  render() {
    return (
      <div className="container">
        {this.props.bloc.display !== "column" && (
          <div className="feature_container" id={this.props.id}>
            <div
              className={this.props.bloc.display === "img_left" ? "right" : ""}
            >
              <Title title={this.props.bloc.title} />
            </div>
            <div
              className={
                "content " +
                (this.props.bloc.display === "img_left" ? "reverse" : "") +
                (this.props.bloc.display === "column" ? "column" : "")
              }
            >
              <Content content={this.props.bloc} />

              <Image scrollTop={this.state.scrollTop} id={this.props.id} image={this.props.bloc.images} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
