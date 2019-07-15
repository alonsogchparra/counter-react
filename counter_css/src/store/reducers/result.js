import * as actionTypes from '../actions/actionTypes';
import { updateObject } from  '../../shared/utility';

const initialState = {
  results: [],
  isLoading: false
};

const storeResult = (state, action) => {
  return updateObject(state, {
    results: state.results.concat({ id: new Date(), value: action.value }),
    isLoading: action.isLoading
  });
};

const deleteResult = (state, action) => {
  return updateObject(state, {
    results: state.results.filter(result => result.id !== action.result_id)
  });
};

const loadResult = (state, action) => {
  return updateObject(state, {
    isLoading: action.isLoading
  });
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.STORE_RESULT:
      return storeResult(state, action);

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    case actionTypes.LOAD_RESULT:
      return loadResult(state, action);

    default:
      return state;

  }

};

export default reducer;