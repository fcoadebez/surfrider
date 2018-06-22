import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProductItem, ProductImage, FlexLayout, Title, PrimaryButton, SizeSelect } from './../../styles/components';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  setHover(hover) {
    this.setState({ hover });
  }

  handleOpenModal() {
    const { openModal, product } = this.props;
    openModal(product);
  }

  renderInfo() {
    const { product } = this.props;
    return (
      <FlexLayout width="80%" style={{ height: '150px' }}>
        <Title size="18px">
          {product.name}
        </Title>
        <Title>
          € {product.price}
        </Title>
      </FlexLayout>
    );
  }

  renderAchat() {
    const { product } = this.props;
    return (<FlexLayout width="80%" style={{ height: '150px' }}>
      <Title size="18px">
        {
          product.sizes.map(size => <SizeSelect>{size}</SizeSelect>)
        }
      </Title>
      <PrimaryButton noMargin onClick={() => this.handleOpenModal()} >
        Achat express
      </PrimaryButton>
    </FlexLayout>);
  }

  render() {
    const { product } = this.props;
    const { hover } = this.state;
    return (
      <ProductItem
        to={`/product/${product.slug}`}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
      >
        <ProductImage src={product.image.src} alt={product.name} />
        {
          hover ?
          this.renderAchat() :
          this.renderInfo()
        }
      </ProductItem>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string.isRequired })),
    categories: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
    attributes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    variations: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Product;
