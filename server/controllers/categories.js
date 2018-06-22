const clientio = require("socket.io-client");

const WooCommerce = require("./../services/WooCommerce");

module.exports.getCategories = async (req, res, next) => {
  let categories = await WooCommerce.getCategories();
  res.send(categories);
};
