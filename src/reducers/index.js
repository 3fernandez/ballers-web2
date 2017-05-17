import { combineReducers }  from 'redux';
import courtReducer from './court'

export default combineReducers({
  courts: courtReducer,
});

