import * as actionTypes from '../actions/actionTypes';
import { updateObject } from  '../../shared/utility';

const initialState = {
  results: []
};

const storeResult = (state, action) => {
  return updateObject(state, {
    results: state.results.concat({ id: new Date(), value: action.value })
  });
};

const deleteResult = (state, action) => {
  return updateObject(state, {
    results: state.results.filter(result => result.id !== action.result_id)
  });
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.STORE_RESULT:
      return storeResult(state, action);

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;

  }

};

export default reducer;