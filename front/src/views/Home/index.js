import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import WordPress from "../../services/api/Wordpress";
import FeatureContainer from "../../components/Features/FeatureContainer"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeContent: "",
    };
  }

  componentWillMount = async () => {
    const homeContent = await WordPress.getHomeContent();
    this.setState({ homeContent: homeContent });
  };

  render() {
    return (
      <div className="container features">
        {this.state.homeContent.acf && this.state.homeContent.acf.blocs.map(bloc => {
            let blocElements = [];
            blocElements.push(<FeatureContainer bloc={ bloc } />);
            return blocElements;
          })}
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
