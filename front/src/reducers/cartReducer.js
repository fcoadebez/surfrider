import
{ TOGGLE_FILTER }
  from './../actions/CartActions';

const initialState = {
  test: 'tmp',
};

export default function cartState(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
