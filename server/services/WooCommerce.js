const WooCommerceAPI = require('woocommerce-api');

const endPoints = require('./../config');

class WooCommerce {
  constructor() {
    this.api = new WooCommerceAPI(endPoints.woocommerce);
  }

  async getProducts() {
    const data = await this.api.getAsync('products?per_page=50');
    let products = JSON.parse(data.toJSON().body);

    return await this.cleanProducts(products);
  }

  async getCategories() {
    const data = await this.api.getAsync('products/categories');
    let categories = JSON.parse(data.toJSON().body);


    return await this.cleanCategories(categories);
  }

  async getProductVariations(product) {
    const data = await this.api.getAsync(`products/${product.id}/variations`);

    return JSON.parse(data.toJSON().body);
  }

  async cleanProducts(products) {
    for (var i = 0; i < products.length; i++) {
      let variations = await this.getProductVariations(products[i]);
      variations = this.cleanVariations(variations);

      let sizes = products[i].attributes.find(obj => obj.name === 'Size');
      sizes = sizes ? sizes.options : [];

      let colors = products[i].attributes.find(obj => obj.name === 'Color');
      colors = colors ? colors.options : [];

      products[i] = {
        id: products[i].id,
        name: products[i].name,
        slug: products[i].slug,
        description: products[i].description,
        short_description: products[i].short_description,
        price: products[i].price,
        categories: products[i].categories,
        categorie: products[i].categories[0],
        image: products[i].images[0],
        images: products[i].images,
        attributes: products[i].attributes,
        attachement: products[i].acf.attachement,
        menu_order: products[i].menu_order,
        variations,
        sizes,
        colors
      };
    }

    products.sort((a, b) => a.menu_order - b.menu_order);

    return products;
  }

  async cleanCategories(categories) {
    for (var i = 0; i < categories.length; i++) {
      categories[i] = {
        id: categories[i].id,
        name: categories[i].name,
        slug: categories[i].slug,
        description: categories[i].description
      };
    }
    return categories;
  }

  cleanVariations(variations) {
    for (var i = 0; i < variations.length; i++) {
      variations[i] = {
        id: variations[i].id,
        price: variations[i].price,
        in_stock: variations[i].in_stock,
        image: variations[i].image,
        attributes: variations[i].attributes,
      };
    }
    return variations;
  }
}

module.exports = new WooCommerce();
