import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FlexLayout, Title, ProductImageSmall, colors } from './../styles/components';

const ProductItem = styled(Link)`
  width: 25%;
  text-decoration: none;
  color: ${colors.secondary};
`;

const Layout = FlexLayout.extend`
  justify-content: space-around;
`;

class InterestProducts extends Component {
  renderProduct(product) {
    return (
      <ProductItem key={product.id} to={`/product/${product.slug}`}>
        <ProductImageSmall src={product.image.src} alt={product.name} />
      <Layout>
        <Title size="18px">
          {product.name}
        </Title>
        <Title size="18px">
          {`€ ${product.price}`}
        </Title>
      </Layout>
      </ProductItem>
    );
  }

  render() {
    const { products } = this.props;
    let productsCloned = products.slice(0);
    const shuffled = productsCloned.sort(() => 0.5 - Math.random());
    productsCloned = shuffled.slice(0, 4);

    return (
      <div style={{ textAlign: 'center', padding: '50px 0px' }}>
        <Title inline align="center" size="32px">
          Cela pourrait
          <Title bold inline style={{ whiteSpace: 'pre-wrap' }} size="32px">
            {' '}vous interresser
          </Title>
        </Title>
        <FlexLayout style={{ padding: '20px 0px' }}>
          {
            productsCloned.map(product => this.renderProduct(product))
          }
        </FlexLayout>
      </div>
    );
  }
}

InterestProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  products: state.product.products,
});

// function mapDispatchToProps(dispatch) {
//   return Object.assign({ dispatch }, bindActionCreators({ fetchProducts }, dispatch));
// }

export default connect(mapStateToProps, null)(InterestProducts);
