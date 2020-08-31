import React from 'react';
import { combineReducers } from 'redux';
import counterReducer from './counter';

export default combineReducers({
  ctr: counterReducer,
});