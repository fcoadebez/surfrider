import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from './../assets/images/LogoV.png';

import { NavLink, Nav, Logo, SecondaryLink, fonts } from './../styles/components';

const Picto = styled.img`
  width: 28px;
  height: 28px;
`;

const CartContainer = styled.div`
  position: relative;
`;

const TotalArticle = styled.span`
  position: relative;
  font-family: ${fonts.title};
`;

class Navigation extends PureComponent {
  renderTotalArticles() {
    let count = 0;
    const { articles } = this.props;
    if (articles.length) {
      articles.forEach((article) => {
        count += parseInt(article.quantity, 10);
      });
    }
    return count;
  }

  render() {
    return (<Nav>
      <NavLink to="/">
        <Logo src={logo} alt="Logo surfrider" size="250px" />
      </NavLink>
      <NavLink to="/">
        Accueil
      </NavLink>
      <NavLink to="/collection/hommes">
        Homme
      </NavLink>
      <NavLink to="/collection/femmes">
        Femme
      </NavLink>
      <NavLink to="/collection/accessoires">
        Accessoires
      </NavLink>
      <NavLink to="/nos-engagements">
        Nos engagements
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
      <CartContainer>
        <Picto src={require('./../assets/images/cart.svg')} alt="cart" />
        <TotalArticle>{this.renderTotalArticles()}</TotalArticle>
      </CartContainer>
      <Picto src={require('./../assets/images/account.svg')} alt="account" />
      <SecondaryLink to="/dons">
        Faire un don
      </SecondaryLink>
      <Picto src={require('./../assets/images/search.svg')} alt="search" />
  </Nav>);
  }
}

Navigation.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  articles: state.cart.articles,
});

// function mapDispatchToProps(dispatch) {
//   return Object.assign({ dispatch }, bindActionCreators({ fetchProducts }, dispatch));
// }

export default connect(mapStateToProps, null)(Navigation);
