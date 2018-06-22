import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { fetchProducts } from './../../actions/ProductActions';
import { TextBackground, ProductLayout, Title, Column, Text, PrimaryLink, VerticalLine } from './../../styles/components';

import Product from './Product';
import Banner from './../../components/Banner';

class Shop extends PureComponent {
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.fetchProducts();
    }
    window.scrollTo(0, 0);
  }

  renderProducts() {
    const { products } = this.props;
    return (<div>
      <Product product={products[0]} />
      <Product product={products[1]} reverse />
      <Product product={products[2]} />
      <Product product={products[3]} reverse />
    </div>);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <Banner img="banner_accueil.jpg">
          <Title size="46px">
            Si toi aussi tu veux être un héros,
          </Title>
          <Title bold size="46px">
            Agis en éco-responsable !
          </Title>
          <Text style={{ textAlign: 'center', position: 'relative', top: '70px' }}>
            <span>
              Découvrez notre collection !
            </span>
          </Text>
          <VerticalLine />
        </Banner>
        <ParallaxProvider>
          <div style={{ position: 'relative' }}>
            <TextBackground>
              En 2017,
            </TextBackground>
          </div>
          { products.length ? this.renderProducts() : <div />}
          <ProductLayout>
            <Column align="center">
              <Parallax
                offsetYMax={25}
                offsetYMin={-25}
                slowerScrollRate
              >
                <img src={require('./../../assets/images/engagements.png')} alt="product" width="400" />
              </Parallax>
            </Column>
            <Column>
              <Title>
                Nos
              </Title>
              <Title bold>
                engagements
              </Title>
              <Text width={60}>
                Chez Surfrider Foundation Europe, Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </Text>
              <div>
                <PrimaryLink to="/nos-engagements" >
                J'adopte !
                </PrimaryLink>
              </div>
            </Column>
          </ProductLayout>
        </ParallaxProvider>
      </div>
    );
  }
}

Shop.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.product.products,
});

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ fetchProducts }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
