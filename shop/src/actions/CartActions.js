import { actions as toastrActions } from 'react-redux-toastr';

export const ADD_ARTICLE = '@CART::ADD_ARTICLE';

const getArticleWithVariation = (product, dataVariation) => {
  let size = null;
  let variation = null;
  product.variations.forEach((v) => {
    size = v.attributes.reduce((filtered, a) => {
      if (a.name === 'Size') {
        filtered.push(a.option);
      }
      return filtered;
    });
    if (size.option === dataVariation.size) variation = v.id;
  });
  return variation;
};

export const addArticle = (product, dataVariation) => async (dispatch) => {
  const variation = getArticleWithVariation(product, dataVariation);

  const article = {
    product,
    variation,
    quantity: dataVariation.quantity,
  };

  dispatch(toastrActions.add({
    type: 'success',
    title: 'Votre produit a été ajouté au panier',
    timeOut: 4000,
    options: {
      removeOnHover: true,
    },
  }));

  dispatch({
    type: ADD_ARTICLE,
    article,
  });
};
