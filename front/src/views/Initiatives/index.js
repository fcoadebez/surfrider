import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./initiatives.less"
import WordPress from "../../services/api/Wordpress";
import Plx from "react-plx";

import Header from "../../components/Header/Header";
import Bandeau from "../../components/Bandeau/Bandeau";

import search from "../../assets/search.svg";
import people from "../../assets/initiatives/people.png";
import galerie1 from "../../assets/initiatives/album1.jpg";
import galerie2 from "../../assets/initiatives/album2.jpg";
import galerie3 from "../../assets/initiatives/album3.jpg";

import appcenter from "../../assets/initiatives/appcenter.png";
import app1 from "../../assets/initiatives/app1.png";
import app2 from "../../assets/initiatives/app2.png";

import time from "../../assets/initiatives/SVG/time.svg";
import location from "../../assets/initiatives/SVG/location.svg";

import playstore from "../../assets/initiatives/SVG/playstore.svg";
import appstore from "../../assets/initiatives/SVG/appstore.svg";
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
        <img className="actionparallax" src={actionparallax} />
          {this.state.initiativesContent.acf &&
            <h2>{this.state.initiativesContent.acf.title_part_1}</h2>
          }
          <div className="search">
            <input type="text" placeholder="Rechercher par ville, nom…" />
            <a href="#"><img src={search} /></a>
          </div>
          
          <div className="collectes">
            
            <div className="collecte">
              <div className="content">
                <h3>Sortie 5e dépollution à Bray-dune plage</h3>
                <div className="detail">
                  <div className="date"><img src={time} />Mardi 26 juin 2018</div>
                  <div className="place"><img src={location} />Bray-Dunes, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                  <img className="people" src={people} />
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Nettoyage de plage Sage Foundation</h3>
                <div className="detail">
                  <div className="date"><img src={time} />Mardi 26 juin 2018</div>
                  <div className="place"><img src={location} />Jard-sur-Mer, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                  <img className="people" src={people} />
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Nettoyage de plage à Arcachon</h3>
                <div className="detail">
                  <div className="date"><img src={time} />Mardi 26 juin 2018</div>
                  <div className="place"><img src={location} />Arcachon, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                  <img className="people" src={people} />
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
            <div className="collecte">
              <div className="content">
                <h3>Nettoyage participatif du Jardin des Moulins</h3>
                <div className="detail">
                  <div className="date"><img src={time} />Mardi 27 juin 2018</div>
                  <div className="place"><img src={location} />Nice, France</div>
                </div>
                <div className="participants">
                  <p>PARTICIPANTS</p>
                  <img className="people" src={people} />
                </div>
                <a href="#">En savoir plus</a>
              </div>
            </div>
          </div>
          <a href="#" className="yellow center">Voir toutes les collectes</a>
        </div>
        <div className="bilan">
          <div className="container">
            <h2>Bilan</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/USrFvWnOsMo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div className="numbers">
              <div className="number">
                <div>996</div>
                <div>collectes en 2018</div>
              </div>
              <div className="number">
                <div>30 876</div>
                <div>participants en 2018</div>
              </div>
              <div className="number">
                <div>11 347</div>
                <div>collectes depuis 1996</div>
              </div>
              <div className="number">
                <div>23</div>
                <div>années de lutte</div>
              </div>
            </div>
            <div className="pdf">
              <span>PDF téléchargeables</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Version simplifiée&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Version intermédiaire&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marine Litter Watch
            </div>
          </div>
          
        </div>
        <div className="container">
          <h2>Galerie photos</h2>
          <div className="photos">
              <div className="photo">
                <img src={galerie1} />
                <div className="content">
                  <h3>Nettoyage de plage scolaire Montesquieu Aquajet</h3>
                  <div className="detail">
                    <div className="date"><img src={time} />Le 17 juin 2018</div>
                    <div className="place"><img src={location} />Châtelaillon-plage, France</div>
                  </div>
                  <a href="#">Voir l'album photos</a>
                </div>
              </div>

              <div className="photo">
                <img src={galerie2} />
                <div className="content">
                  <h3>Initiatives Océanes à Landéda avec le Festival Horizons Open Sea</h3>
                  <div className="detail">
                    <div className="date"><img src={time} />Le 10 juin 2018</div>
                    <div className="place"><img src={location} />Landéda, France</div>
                  </div>
                  <a href="#">Voir l'album photos</a>
                </div>
              </div>
              <div className="photo">
                <img src={galerie3} />
                <div className="content">
                  <h3>Nettoyage de plages organisé par les Conchyliculteurs</h3>
                  <div className="detail">
                    <div className="date"><img src={time} />Le 09 juin 2018</div>
                    <div className="place"><img src={location} />Arradon, France</div>
                  </div>
                  <a href="#">Voir l'album photos</a>
                </div>
              </div>
          </div>
          <a href="#" className="yellow center">Voir tous les albums photos</a>
        </div>
        <div className="stores">
          <div className="container">
            <div className="app">
              <img className="app1" src={app1} />
              <img className="appcenter" src={appcenter} />
              <img className="app2" src={app2} />
            </div>
            <div className="content">
              <h3>Découvrez notre application Initiatives Océanes !</h3>
              <p>Découvrez l’application Initiatives Océanes, qui vous permet de suivre, organiser et  participer à des collectes près de chez vous, et devenez ainsi acteur de la sauvegarde du littoral !</p>
              <div className="store">
                <img src={appstore} />
                <img src={playstore} />
              </div>
            </div>
          </div>
        </div>

        <div className="bandeau">
          <div className="content">
            <h3>Vous avez des questions sans réponses ?</h3>
            <a href="#">Consulter la FAQ</a>
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
