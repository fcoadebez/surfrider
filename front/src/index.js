import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import App from './App';

import Home from './views/Home';
import Agir from './views/Agir';
import Shop from './views/Shop';

import './styles/index.css';

ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <App>
      <Switch>
        <Route exact="exact" path="/" component={Home} />
        <Route exact="exact" path="/agir" component={Agir} />
        <Route exact="exact" path="/shop" component={Shop} />
      </Switch>
    </App>
  </HashRouter>
</Provider>, document.getElementById('root'));

registerServiceWorker();
