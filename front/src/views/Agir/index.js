import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./agir.less"
import WordPress from "../../services/api/Wordpress";
import FeatureContainer from "../../components/Features/FeatureContainer";
import Bandeau from "../../components/Bandeau/Bandeau";
import Item from "../../components/Item/Item";
import Plx from "react-plx";

import benevole from "../../assets/agir/benevole.svg";
import partenaire from "../../assets/agir/partenaire.svg";
import don from "../../assets/agir/don.svg";
import soutien from "../../assets/agir/soutien.svg";

import Header from "../../components/Header/Header";

import actionparallax from "../../assets/motif_fond.svg";


class Agir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agirContent: ""
    };
  }

  componentWillMount = async () => {
    const agirContent = await WordPress.getAgirContent();
    this.setState({ agirContent: agirContent });
  };

  render() {
    return (
      
      <div className="agir">
        <Header agir="true" />
        <div className="missions">
          <img className="motif_fond" src={actionparallax} />
          <div className='container'>
            {this.state.agirContent.acf &&
              this.state.agirContent.acf.missions.map((bloc, index) => {
                let feature = "feature" + (index + 1);
                let blocElements = [];
                if (index == 0) {
                  blocElements.push(
                    <div key={index} className="first_feature">
                      {/* <img className="img_top" src={img_top} /> */}
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
                        {/* <img className="parallax parallax1" src={parallax1} /> */}
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
                        {/* <img className="parallax parallax2" src={parallax2} /> */}
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
                        {/* <img className="parallax parallax3" src={parallax3} /> */}
                      </Plx>

                      {/* <img className="img_bottom" src={img_bottom} /> */}
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
            
        </div>
        {this.state.agirContent &&
          <Bandeau content={this.state.agirContent} />
        }
        <div className='container feature_bloc_2'>
          <img className="motif_fond" src={actionparallax} />
            {this.state.agirContent.acf &&
              this.state.agirContent.acf.adherer.map((bloc, index) => {
                let feature = "feature" + (index + 1);
                let blocElements = [];
                
                  blocElements.push(
                    <div key={index} className="">
                      <FeatureContainer id={feature} bloc={bloc} />
                    </div>);
                

                return blocElements;
              })}
            </div>
            <div className="container">
              <div className="items">
                <Item title="Devenir Bénévole" icon={benevole}/>
                <Item title="Devenir Partenaire" icon={partenaire}/>
                <Item title="Faire un don" icon={don}/>
                <Item title="Nous soutenir" icon={soutien}/>
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
)(Agir);
