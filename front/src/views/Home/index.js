import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tmp: 'coucou',
    };
  }
  render() {
    return (
      <div>
        {this.state.tmp}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
