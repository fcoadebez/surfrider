import
{
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCTS_VARIATIONS,
  RECEIVE_CATEGORIES,
}
  from './../actions/ProductActions';

const initialState = {
  products: [],
  categories: [],
  isFetching: false,
};

export default function productState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RECEIVE_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    case RECEIVE_PRODUCTS: {
      return {
        ...state,
        isFetching: false,
        products: action.products,
      };
    }
    case RECEIVE_PRODUCTS_VARIATIONS: {
      const products = state.products.map((product) => {
        if (action.product.id === product.id) {
          return {
            ...product,
            variationsProduct: action.variations,
          };
        }
        return product;
      });
      return {
        ...state,
        isFetching: false,
        products,
      };
    }
    default:
      return state;
  }
}
