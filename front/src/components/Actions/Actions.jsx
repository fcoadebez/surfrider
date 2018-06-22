import React, { Component } from "react";
import "./action.less"

import actionparallax from "../../assets/motif_fond.svg";

export default class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    console.log(this.props.actions);

    return (
      <div className="action_parallax">
        <img className="left_action" src={actionparallax} alt=""/>
        <img className="right_action" src={actionparallax} alt=""/>
        <div className="actions container">
          <h2 dangerouslySetInnerHTML={{ __html: this.props.main_title }}/>
          {this.props.actions.map((action, index) => {
            if (index === this.props.actions.length-1) {
              return (<div key={index} className="action_container">
                        <div className="action no-border">
                          <div className="content">
                            <h3 dangerouslySetInnerHTML={{ __html: action.title }}></h3>
                            <p dangerouslySetInnerHTML={{ __html: action.content }}></p>
                            <a href={action.button.url}>{action.button.title}</a>
                          </div>
                          <div className="image">
                            <img src={action.image.url} alt=""/>
                          </div>
                        </div>
                      </div>);
            }
            return (<div key={index} className="action_container">
                      <div className="action">
                        <div className="content">
                          <h3 dangerouslySetInnerHTML={{ __html: action.title }}></h3>
                          <p dangerouslySetInnerHTML={{ __html: action.content }}></p>
                          <a href={action.button.url}>{action.button.title}</a>
                        </div>
                        <div className="image">
                          <img src={action.image.url} alt=""/>
                        </div>
                      </div>
                    </div>);
          })}
        </div>
      </div>
    );
  }
}
