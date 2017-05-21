import { combineReducers, createStore }  from 'redux';
import courtReducer from './court'
import activeCourtReducer from './active-court'

const allReducers = combineReducers({
  courts: courtReducer,
  activeCourt: activeCourtReducer,
});

export default createStore(allReducers);

