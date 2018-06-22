import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FontAwesome from 'react-icons/lib/fa';
import { toastr } from 'react-redux-toastr';
import styled from 'styled-components';

import { addArticle } from './../../actions/CartActions';
import InputQuantity from './../../components/InputQuantity';
import InterestProduct from './../../components/InterestProducts';
import Banner from './../../components/Banner';
import Loader from './../../components/Loader';

import {
  SimpleButton,
  FlexLayout,
  Column,
  ProductImage,
  Title,
  SizeSelect,
  Text,
  PrimaryButton,
  Nav,
  NavAnchor,
  LightLink,
} from './../../styles/components';

const ImageBanner = styled.img`
  position: absolute;
  left: 70%;
  height: 300px;
  bottom: -150px;
  transform: rotate(20deg);
`;

const ProductItem = styled.div`
  margin-bottom: 170px;
`;

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      size: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChangeQuantity(quantity) {
    this.setState({ quantity });
  }

  handleChangeSize(size) {
    this.setState({ size });
  }

  handleAddPanier() {
    const { quantity, size } = this.state;
    const { products, addArticle } = this.props;

    const product = products.find(obj => obj.slug === this.props.match.params.slug);

    if (!size) {
      toastr.error('Erreur lors de l\'ajout', 'Aucune taille choisie.');
      return false;
    }

    if (!quantity) {
      toastr.error('Erreur lors de l\'ajout', 'La quantité n\'est pas renseigné.');
      return false;
    }

    const dataVariation = {
      size,
      quantity,
    };

    addArticle(product, dataVariation);
  }

  render() {
    const { products, isFetching, history } = this.props;
    const { size } = this.state;

    if (isFetching || !products.length) return <Loader />;

    const product = products.find(obj => obj.slug === this.props.match.params.slug);

    if (!product) return <span>{'Votre produit n\'existe pas'}</span>;

    return (
      <ProductItem>
        <div>
          <SimpleButton onClick={() => history.goBack()}>
            <FontAwesome.FaChevronLeft size={22} />
            <span>
              Retour
            </span>
          </SimpleButton>
        </div>
        <div>
          <SimpleButton onClick={() => history.goBack()} size="16px">
            {`
              Accueil > ${product.categorie.name} > ${product.name}
            `}
          </SimpleButton>
        </div>
        <FlexLayout vertical="flex-start">
          <Column align="center">
            <ProductImage src={product.image.src} alt={product.name} />
          </Column>
          <Column>
            <Title bold size="32px">
              { product.name }
            </Title>
            <Title>
              € { product.price }
            </Title>
            <FlexLayout>
              <div>
                <Text bold>
                  Taille
                </Text>
                {
                  product.sizes.map(sz => (<SizeSelect
                    selected={size === sz}
                    onClick={e => this.handleChangeSize(e.target.dataset.size)}
                    data-size={sz}
                    key={sz}
                  >
                    {sz}
                  </SizeSelect>))
                }
              </div>
              <FlexLayout>
                <Text bold>
                  Quantité
                </Text>
                <InputQuantity changeQuantity={quantity => this.handleChangeQuantity(quantity)} />
              </FlexLayout>
              <div>
                <PrimaryButton onClick={() => this.handleAddPanier()}>
                  Ajouter au panier
                </PrimaryButton>
              </div>
            </FlexLayout>
            <div>
              <Text width={80} dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div>
              <Text bold>
                Partager
              </Text>
              <Nav style={{ maxWidth: '200px', padding: 0 }}>
                <NavAnchor href="https://facebook.com">
                  <FontAwesome.FaFacebook size={26} />
                </NavAnchor>
                <NavAnchor href="https://twitter.com">
                  <FontAwesome.FaTwitter size={26} />
                </NavAnchor>
                <NavAnchor href="https://pinterest.com">
                  <FontAwesome.FaPinterest size={26} />
                </NavAnchor>
              </Nav>
            </div>
          </Column>
        </FlexLayout>
        <InterestProduct />
        <Banner img="img.png">
          <Title size="46px" light>
            {'Stop aux bouteilles d\'eau,'}
          </Title>
          <Title bold size="46px" light>
            adopte la gourde !
          </Title>
          <LightLink to="/product/gourde-inox-80cl-klean-kanteen-x-surfrider">
            {'J\'adopte !'}
          </LightLink>
          <ImageBanner src={require('./../../assets/images/gourde.png')} alt="gourde" height="300" />
        </Banner>
      </ProductItem>
    );
  }
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  addArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.product.products,
  isFetching: state.product.isFetching,
});

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ addArticle }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
