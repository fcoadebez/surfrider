import React, { Component } from "react";
import WordPress from "../../services/api/Wordpress";
import "./footer.less"
import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import google_plus from '../../assets/google_plus.svg';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [],
      homeContent: ""
    };
  }

  componentWillMount = async () => {
    const navigation = await WordPress.getMainNav();
    this.setState({ nav: navigation.items });

    const homeContent = await WordPress.getHomeContent();
    this.setState({ homeContent: homeContent });

    
  };

  render() {
    return (
      <div>
        <footer>
          <div className="footer container">
          
              <Link to="/"><img className="logo" src={logo} alt=""/></Link>
              <div className="navigation">
              <h5>Plan du site</h5>
                {this.state.nav.map((nav, index) => {
                  let navElements = [];
                  navElements.push(<Link key={index} to={nav.object_slug}>{nav.title}</Link>);
                  return navElements;
                })}
              </div>
              <div className="follow_us">
                <h5>Suivez surfrider</h5>
                <a href=""><img src={facebook} alt=""/></a>
                <a href=""><img src={instagram} alt=""/></a>
                <a href=""><img src={twitter} alt=""/></a>
                <a href=""><img src={youtube} alt=""/></a>
                <a href=""><img src={google_plus} alt=""/></a>
              </div>
          </div>
        </footer>
      </div>
    );
  }
}
