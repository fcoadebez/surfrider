import React, { Component } from "react";
import WordPress from "../../services/api/Wordpress";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentWillMount = async () => {
    const navigation = await WordPress.getMainNav();
    this.setState({ nav: navigation.items });
  };

  render() {
    return (
      <div>
        {this.state.nav.map(nav => {
          let navElements = [];
          navElements.push(nav.title);
          return navElements;
        })}
      </div>
    );
  }
}
