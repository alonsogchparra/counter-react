import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  counter: 0
};

const incrementCounter = (state, action) => {
  return updateObject(state, {
    counter: state.counter + 1
  });
};

const decrementCounter = (state, action) => {
  return updateObject(state, {
    counter: state.counter - 1
  });
};

const addCounter = (state, action) => {
  return updateObject(state, {
    counter: state.counter + action.value
  });
};

const subtractCounter = (state, action) => {
  return updateObject(state, {
    counter: state.counter - action.value
  });
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.INCREMENT:
      return incrementCounter(state, action);

    case actionTypes.DECREMENT:
      return decrementCounter(state, action);

    case actionTypes.ADD:
      return addCounter(state, action);

    case actionTypes.SUBTRACT:
      return subtractCounter(state, action);

    default:
      return state;
  }
};

export default reducer;