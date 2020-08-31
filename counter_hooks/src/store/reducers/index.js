import { combineReducers } from 'redux';
import counterReducer from './counter';
import resultReducer from './result';

export default combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});