import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import App from './App';
import Courts from './pages/courts/Courts';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';

import './index.css';

const rootElement = document.getElementById('root');
const store = createStore(reducers);

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

function renderRoot(App) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <div>
            <Route exact={true} path="/" component={App}></Route>
            <PrivateRoute path="/courts" component={Courts} />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    rootElement
  );
}

renderRoot(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // eslint-disable-line global-require
        renderRoot(NextApp);
    });
}
