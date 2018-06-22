import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CatalogLayout } from './../../styles/components';

import Product from './Product';

class ListProducts extends PureComponent {
  handleOpenModal(product) {
    const { openModal } = this.props;
    openModal(product);
  }

  render() {
    const { products } = this.props;
    return (
      <CatalogLayout>
        {
          products.map(product => <Product openModal={data => this.handleOpenModal(data)}product={product} key={product.id} />)
        }
      </CatalogLayout>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ListProducts;
