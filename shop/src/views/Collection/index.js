import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { Title, CollectionSubtitle, Wrapper, VerticalLine } from './../../styles/components';
import ListProducts from './ListProducts';
import Loader from './../../components/Loader';


class Collection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      product: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openModal(product) {
    this.setState({ modalOpen: true, product });
  }

  render() {
    let { products } = this.props;
    const { categories } = this.props;
    const { modalOpen } = this.state;

    products = products.filter((obj) => {
      const categoriesSlug = obj.categories.map(category => category.slug);
      return categoriesSlug.includes(this.props.match.params.slug);
    });

    const category = categories.find(obj => obj.slug === this.props.match.params.slug);

    if (!category) return <Loader />;

    return (
      <div>
        <Wrapper width={50}>
          <Title bold align="center" size="38px">
            {category.name}
          </Title>
          <CollectionSubtitle>
            {category.description}
          </CollectionSubtitle>
          <VerticalLine collection />
        </Wrapper>
        {
          !products.length ?
            <span>{'Aucun produits n\'a été trouvé pour cette collection'}</span> :
            <ListProducts openModal={product => this.openModal(product)} products={products} />
        }

        <ReactModal
          shouldCloseOnOverlayClick
          isOpen={modalOpen}
          style={{
             content: {
               width: '60%',
               margin: '0 auto',
               height: '70vh',
             },
           }}
        />
      </div>
    );
  }
}

Collection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  products: state.product.products,
  categories: state.product.categories,
});

// function mapDispatchToProps(dispatch) {
//   return Object.assign({ dispatch }, bindActionCreators({ fetchProducts }, dispatch));
// }

export default connect(mapStateToProps, null)(Collection);
