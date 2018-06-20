import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import WordPress from "../../services/api/Wordpress";
import FeatureContainer from "../../components/Features/FeatureContainer";
import Actions from "../../components/Actions/Actions";
import Plx from "react-plx";

import Header from "../../components/Header/Header";

import img_top from "../../assets/DESIGN/img_top.jpg";
import img_bottom from "../../assets/DESIGN/img_bottom.jpg";
import parallax1 from "../../assets/DESIGN/parallax1.png";
import parallax2 from "../../assets/DESIGN/parallax2.png";
import parallax3 from "../../assets/DESIGN/parallax3.png";


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
        <Header home="true" />
      <div className="features">
        {this.state.homeContent.acf &&
          this.state.homeContent.acf.blocs.map((bloc, index) => {
            let feature = "feature" + (index + 1);
            let blocElements = [];
            if (index == 0) {
              blocElements.push(
                <div key={index} className="first_feature">
                  <img className="img_top" src={img_top} />
                  <FeatureContainer id={feature} bloc={bloc} />
                </div>);
            } else if (index == 1) {
              blocElements.push(
                <div key={index} className="last_feature feature_black">
                  <Plx
                    className="imageParallax"
                    parallaxData={[
                      {
                        start: 1300,
                        end: 1600,
                        properties: [
                          {
                            startValue: 0,
                            endValue: 1,
                            property: "opacity"
                          }
                        ]
                      }
                    ]}
                  >
                    <img className="parallax parallax1" src={parallax1} />
                  </Plx>
                  
                  <FeatureContainer id={feature} bloc={bloc} />
                </div>);
            } else if (index == 2) {
              blocElements.push(
                <div key={index} className="last_feature feature_black">
                <Plx
                    className="parallax2_container"
                    parallaxData={[
                      {
                        start: 2300,
                        end: 2900,
                        properties: [
                          {
                            startValue: 0,
                            endValue: 0.25,
                            property: "opacity"
                          },
                          {
                            startValue: 130,
                            endValue: 80,
                            property: "translateY"
                          },
                          {
                            startValue: -100,
                            endValue: 50,
                            property: "translateX"
                          }
                        ]
                      }
                    ]}
                  >
                    <img className="parallax parallax2" src={parallax2} />
                  </Plx>
                  <FeatureContainer id={feature} bloc={bloc} />
                </div>);
            } else if (index == 3) {
              blocElements.push(
                <div key={index} className="last_feature feature_black">
                <Plx
                    className="parallax3_container"
                    parallaxData={[
                      {
                        start: 2700,
                        end: 3200,
                        properties: [
                          {
                            startValue: 0,
                            endValue: 0.25,
                            property: "opacity"
                          },
                          {
                            startValue: 200,
                            endValue: -140,
                            property: "translateX"
                          }
                        ]
                      }
                    ]}
                  >
                    <img className="parallax parallax3" src={parallax3} />
                  </Plx>

                  <img className="img_bottom" src={img_bottom} />
                  <FeatureContainer id={feature} bloc={bloc} />
                </div>);
            } else {
              blocElements.push(
                <div key={index} className="feature_black">
                  <FeatureContainer id={feature} bloc={bloc} />
                </div>);
            }

            return blocElements;
          })}
          
      </div>
      
        {this.state.homeContent.acf &&
          <Actions main_title={this.state.homeContent.acf.title_part_2} actions={this.state.homeContent.acf.actions} />
        }
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
