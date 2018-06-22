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
      homeContent: "",
      agirContent: "",
      initiativesContent: ""
    };
  }

  componentWillMount = async () => {
    const navigation = await WordPress.getMainNav();
    this.setState({ nav: navigation.items });

    const homeContent = await WordPress.getHomeContent();
    this.setState({ homeContent: homeContent });

    const agirContent = await WordPress.getAgirContent();
    this.setState({ agirContent: agirContent });

    const initiativesContent = await WordPress.getInitiativesContent();
    this.setState({ initiativesContent: initiativesContent });


    
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
              {this.state.nav.map((nav, index) => {
                let navElements = [];
                navElements.push(<Link key={index} to={nav.object_slug}>{nav.title}</Link>);
                return navElements;
              })}
            </div>
          </div>
          
          {this.props.home == "true" &&
          <div className="title_container_home">
            <div className="title">
              {this.state.homeContent.acf && 
                <h1 dangerouslySetInnerHTML={{ __html: this.state.homeContent.acf.title }}></h1>
              }
              
              <p>Commencer le voyage</p>
              <div className="separator"></div>
            </div>
          </div>
          }
          {this.props.agir == "true" && this.state.agirContent.acf &&
          <div style={{backgroundImage: 'url(' + this.state.agirContent.acf.image_header.url + ')'}} className="title_container">
            <div className="title">
              <h1 dangerouslySetInnerHTML={{ __html: this.state.agirContent.acf.title }}></h1>
            </div>
          </div>
          }
          {this.props.initiatives == "true" && this.state.initiativesContent.acf &&
          <div style={{backgroundImage: 'url(' + this.state.initiativesContent.acf.image_header.url + ')'}} className="title_container">
            <div className="title">
              <h1 dangerouslySetInnerHTML={{ __html: this.state.initiativesContent.title.rendered }}></h1>
            </div>
            <div className="links">
              <a href="#">{this.state.initiativesContent.acf.link1.title}</a>
              <a href="#">{this.state.initiativesContent.acf.link2.title}</a>
            </div>
          </div>
          }
        </header>
      </div>
    );
  }
}
