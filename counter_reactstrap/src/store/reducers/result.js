import * as actionTypes from '../actions/actionTypes';

const INIT_STATE = {
  results: [],
  loading: false,
  progressBar: 0
};

const reducer = (state = INIT_STATE, action) => {

  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
        loading: action.loading,
        progressBar: action.progressBar
      }

    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.result_id)
      }

    case actionTypes.LOADING_RESULT:
      return {
        ...state,
        loading: action.loading
      }

    case actionTypes.UPDATE_PROGRESS_BAR:
      return {
        ...state,
        progressBar: action.progressBar
      }

    default:
      return state;

  }

}

export default reducer;