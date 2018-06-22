import React, { Component } from "react";
import "./bandeau.less";

export default class Bandeau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    return (
      <div style={{backgroundImage: 'url(' + this.props.content.acf.bandeau_image.url + ')'}} className="bandeau">
        <div className="content">
          <h3>{this.props.content.acf.bandeau_title}</h3>
          <a href={this.props.content.acf.bandeau_link.url}>{this.props.content.acf.bandeau_link.title}</a>
        </div>
      </div>
    );
  }
}
