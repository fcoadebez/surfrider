import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class ListProducts extends PureComponent {
  renderListProducts() {
    const { products } = this.props;
    return products.map(product => <Product product={product} key={product.id} />);
  }

  render() {
    return (
      <div>
        {
          this.renderListProducts()
        }
      </div>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListProducts;
