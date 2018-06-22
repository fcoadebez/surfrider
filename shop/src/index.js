import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr'

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import App from './App';

import Home from './views/Home';
import Product from './views/Product';
import Collection from './views/Collection';

import './styles/index.css';

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:slug" component={Product} />
        <Route path="/collection/:slug" component={Collection} />
      </Switch>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
    </App>
  </BrowserRouter>
</Provider>, document.getElementById('root'));

registerServiceWorker();
