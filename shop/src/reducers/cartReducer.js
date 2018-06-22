import
{ ADD_ARTICLE }
  from './../actions/CartActions';

const initialState = {
  articles: [],
};

export default function cartState(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:

      return {
        ...state,
        articles: [...state.articles, action.article],
      };
    default:
      return state;
  }
}
