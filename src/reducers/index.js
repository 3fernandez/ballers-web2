import { combineReducers }  from 'redux';
import courtReducer from './court'
import activeCourtReducer from './active-court'

export default combineReducers({
  courts: courtReducer,
  activeCourt: activeCourtReducer,
});

