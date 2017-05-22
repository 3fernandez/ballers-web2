import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import Home from './components/home/Home';
import Courts from './containers/courts/Courts';

import './index.css';

const rootElement = document.getElementById('root');

function PrivateRoute ({component: Component, ...rest}) {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function renderRoot(Home) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}></Route>
            <PrivateRoute path="/courts" component={Courts} />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    rootElement
  );
}

renderRoot(Home);

if (module.hot) {
  module.hot.accept('./components/home/Home', () => {
    const NextApp = require('./components/home/Home').default; // eslint-disable-line global-require
    renderRoot(NextApp);
  });
}
