import { combineReducers }  from 'redux';
import courts from './court'
import activeCourt from './active-court'

export default combineReducers({
  courts,
  activeCourt,
});


