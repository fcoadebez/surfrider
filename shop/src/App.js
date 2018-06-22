import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { fetchProducts } from './actions/ProductActions';
import { AppLayout } from './styles/components';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <AppLayout>
        <Header />
        {this.props.children}
        <Footer />
      </AppLayout>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ fetchProducts }, dispatch));
}

export default withRouter(connect(null, mapDispatchToProps)(App));
