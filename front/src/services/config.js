export const endPoints = {
  basepath: 'http://florent-coadebez.fr/surfrider',
  api: 'http://florent-coadebez.fr/surfrider/wp-json/wp/v2',
};

export const woocommerce = {
  url: endPoints.basepath,
  consumerKey: 'consumer_key',
  consumerSecret: 'consumer_secret',
  wpAPI: true,
  version: 'wc/v2',
  queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
};
