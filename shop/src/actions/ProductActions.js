import store from './../store';

export const REQUEST_PRODUCTS = '@PRODUCT::REQUEST_PRODUCTS';

export const RECEIVE_PRODUCTS = '@PRODUCT::RECEIVE_PRODUCTS';

export const RECEIVE_PRODUCTS_VARIATIONS = '@PRODUCT::RECEIVE_PRODUCTS_VARIATIONS';

export const RECEIVE_CATEGORIES = '@PRODUCT::RECEIVE_CATEGORIES';

export const requestProduct = () => ({
  type: REQUEST_PRODUCTS,
});

const getProducts = async () => {
  const products = await fetch('http://localhost:8079/products');
  return products.json();
};

const getCategories = async () => {
  const categories = await fetch('http://localhost:8079/categories');
  return categories.json();
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(requestProduct());
  const products = await getProducts();
  dispatch({
    type: RECEIVE_PRODUCTS,
    products,
  });

  dispatch({
    type: RECEIVE_CATEGORIES,
    categories: await getCategories(),
  });
};

export const getProductBySlug = async (slug) => {
  let products;
  if (!store.getState().product.products.length) {
    products = await getProducts();
  } else {
    ({ products } = store.getState().product);
  }
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = async (slug) => {
  let products;
  if (!store.getState().product.products.length) {
    products = await getProducts();
  } else {
    ({ products } = store.getState().product);
  }

  return products.find((product) => {
    const categories = product.categories.map(categorie => categorie.slug);
    return categories.includes(slug);
  });
};
