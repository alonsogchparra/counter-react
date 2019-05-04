import * as actionTypes from '../actions/actionTypes';

const INIT_STATE = {
  results: []
};

const reducer = (state = INIT_STATE, action) => {

  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }

    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.result_id)
      }

    default:
      return state;

  }

}

export default reducer;