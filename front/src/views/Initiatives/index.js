import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./initiatives.less"
import WordPress from "../../services/api/Wordpress";
import Plx from "react-plx";

import Header from "../../components/Header/Header";

import actionparallax from "../../assets/motif_fond.svg";


class Initiatives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initiativesContent: ""
    };
  }

  componentWillMount = async () => {
    const initiativesContent = await WordPress.getInitiativesContent();
    this.setState({ initiativesContent: initiativesContent });
  };

  render() {
    console.log(this.state.initiativesContent.acf);
    return (
      <div className="initiatives">
        <Header initiatives="true" />
        <div className="container">
          {this.state.initiativesContent.acf &&
            <h2>{this.state.initiativesContent.acf.title_part_1}</h2>
          }
          <input type="text" />
          <div className="collectes">
            <div className="collecte">
              <div className="content">
                <h3>Sortie 5e dépollution à Bray-dune plage</h3>
                <div className="detail">
                  <div className="date">Mardi 26 juin 2018</div>
                  <div className="place">Bray-Dunes, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Sortie 5e dépollution à Bray-dune plage</h3>
                <div className="detail">
                  <div className="date">Mardi 26 juin 2018</div>
                  <div className="place">Bray-Dunes, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Sortie 5e dépollution à Bray-dune plage</h3>
                <div className="detail">
                  <div className="date">Mardi 26 juin 2018</div>
                  <div className="place">Bray-Dunes, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Sortie 5e dépollution à Bray-dune plage</h3>
                <div className="detail">
                  <div className="date">Mardi 26 juin 2018</div>
                  <div className="place">Bray-Dunes, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
          </div>
        </div>

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
)(Initiatives);
