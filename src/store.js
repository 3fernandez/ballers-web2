import { createStore, applyMiddleware }  from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

import normalize from 'json-api-normalizer';

const fetchData = (dispatch, action) => {
    const options = {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        const message = `${response.status} - ${response.statusText}`;
        var error = new Error(message);
        error.response = response
        throw error
      }
    }

    fetch(`http://localhost:5000/v1/${action.fetch.endpoint}`, options)
    .then(checkStatus)
    .then((response) => { return response.json(); })
    .then((json) => {
      dispatch({
        type: `${action.type}_SUCCESS`,
        payload: json,
        jsonapi: true,
      });
    })
    .catch((ex) => {
      console.error(ex);
    });
};

const api = (store) => (next) => (action) => {
  if (action.fetch) {
    fetchData(store.dispatch, action);
  }

  if (action.jsonapi) {
    const payload = normalize(action.payload);
    action.resource = Object.keys(payload)[0];
    action.payload = normalize(action.payload)[action.resource];
  }

  next(action);
}

const middlewares = applyMiddleware(
  thunk,
  logger,
  api,
);

export default createStore(
  reducers,
  middlewares,
);
