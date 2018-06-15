import React, { Component } from "react";
import WordPress from "../../services/api/Wordpress";
import "./header.less"
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import account from '../../assets/account.svg';
import { Link } from 'react-router-dom'

export default class Header extends Component {
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
        <header>
          <div className="nav">
            <div className="container">
              <Link to="/"><img className="logo" src={logo} alt=""/></Link>
              <div className="links">
                  <Link to="/search"><img className="" src={search} alt=""/></Link>

                  <Link to="/account"><img className="" src={account} alt=""/></Link>

                  <Link className="yellow" to="/donate">Faire un don</Link>

              </div>
            </div>
            
          </div>
          <div className="subnav">
            <div className="container">
              {this.state.nav.map(nav => {
                let navElements = [];
                navElements.push(<Link to={nav.object_slug}>{nav.title}</Link>);
                return navElements;
              })}
            </div>
          </div>
          <div className="title_container">
            <div className="title">
              {this.state.homeContent.acf && 
                <h1 dangerouslySetInnerHTML={{ __html: this.state.homeContent.acf.title }}></h1>
              }
              <div className="separator"></div>
              <p>Commencer le voyage</p>
            </div>
          </div>

          
        </header>
      </div>
    );
  }
}
