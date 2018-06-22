import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

import { ProductLayout, Title, Column, Text, PrimaryLink, TextBackgroundImage, CollectionLink, FlexLayout, ProductImage } from './../../styles/components';

class Product extends PureComponent {
  render() {
    const { product, reverse } = this.props;
    return (
      <ProductLayout reverse={reverse}>
        <Column align="center">
          <div style={{ position: 'relative' }}>
            {product.attachement &&
              <TextBackgroundImage dangerouslySetInnerHTML={{ __html: product.attachement }} />}
            <Parallax
              offsetYMax={25}
              offsetYMin={-25}
              slowerScrollRate
            >
              <ProductImage src={product.image.src} alt="product" width="400" reverse={reverse} rotate={product.attachement ? 'rotate' : undefined} />
            </Parallax>
          </div>
        </Column>
        <Column align={reverse ? 'right' : 'left'}>
          <Title bold align={reverse ? 'right' : 'left'}>
            {product.name}
          </Title>
          <Text width={60} dangerouslySetInnerHTML={{ __html: product.short_description || product.description }} />
          <FlexLayout reverse={reverse}>
            <PrimaryLink to={`/product/${product.slug}`} >
            J'adopte !
            </PrimaryLink>
            <Parallax
              offsetYMax={50}
              offsetYMin={-50}
              slowerScrollRate
            >
              <CollectionLink reverse={reverse ? 'reverse' : undefined} to={`/collection/${product.categorie.slug}`}>
                Voir toute la collection {product.categorie.slug}
              </CollectionLink>
            </Parallax>
          </FlexLayout>
        </Column>
      </ProductLayout>
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
    attachement: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string.isRequired })),
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
    attributes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    variations: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  reverse: PropTypes.bool,
};

Product.defaultProps = {
  reverse: false,
  attachement: '',
};

export default Product;
