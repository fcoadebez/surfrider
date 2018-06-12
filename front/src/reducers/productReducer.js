import
{ GET_PRODUCTS }
  from './../actions/CartActions';

const initialState = {
  products: [],
};

export default function mapState(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
