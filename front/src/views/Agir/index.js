import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import WordPress from "../../services/api/Wordpress";
import FeatureContainer from "../../components/Features/FeatureContainer";
import Actions from "../../components/Actions/Actions";
import Plx from "react-plx";

import Header from "../../components/Header/Header";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeContent: ""
    };
  }

  componentWillMount = async () => {
    const homeContent = await WordPress.getHomeContent();
    this.setState({ homeContent: homeContent });
  };

  componentWillMount = async () => {
    const homeContent = await WordPress.getHomeContent();
    this.setState({ homeContent: homeContent });
  };

  render() {
    return (
      
      <div>
        <Header />
      
      </div>
    );
  }
}

const mapStateToProps = () => ({
  // loading: getProductsFetching(state.products),
});

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
