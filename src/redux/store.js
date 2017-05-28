import { createStore, applyMiddleware }  from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import fetcher from './middlewares/fetcher';
import normalizer from './middlewares/normalizer';

console.log(process.env);
const middlewares = applyMiddleware(
  thunk,
  logger,
  fetcher({
    host: process.env.API_HOST,
    options: {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  }),
  normalizer,
);

export default createStore(
  reducers,
  middlewares,
);
