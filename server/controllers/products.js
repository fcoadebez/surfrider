const clientio = require("socket.io-client");

const WooCommerce = require("./../services/WooCommerce");

module.exports.getProducts = async (req, res, next) => {
  let products = await WooCommerce.getProducts();
  res.send(products);
};
