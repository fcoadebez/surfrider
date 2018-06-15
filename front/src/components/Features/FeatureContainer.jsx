import React, { Component } from "react";
import "./feature.less";
import Title from "./FeatureTitle";
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
    console.log(this.props.bloc);
    return (
      
      <div>
        {/* {this.props.bloc.display === 'column' &&
          <div className={"feature_container " + (this.props.bloc.display === 'img_left' ? 'reverse' : '') + (this.props.bloc.display === 'column' ? 'column' : '')}>
            <div className="align">
              <Title title={this.props.bloc.title}/>
              <Content content={this.props.bloc.content} />
            </div>
            <Image image={this.props.bloc.images} />
          </div>
        } */}

        {this.props.bloc.display !== 'column' &&
          <div className="feature_container">
            <div className={(this.props.bloc.display === 'img_left' ? 'right' : '')}>
              <Title title={this.props.bloc.title}/>
            </div>
            <div className={"content " + (this.props.bloc.display === 'img_left' ? 'reverse' : '') + (this.props.bloc.display === 'column' ? 'column' : '')}>
              <Content content={this.props.bloc.content} />
              <Image image={this.props.bloc.images} />
            </div>
          </div>
        }
        
      </div>
    );
  }
}
