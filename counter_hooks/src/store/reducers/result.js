import * as actionTypes from '../actions/actionTypes';

const iniState = {
  results: [],
  isLoading: false,
}

export default (state = iniState, action) => {
  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.value }),
        isLoading: action.isLoading
      }

    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.resId)
      }

    case actionTypes.LOADING_RESULT:
      return {
        ...state,
        isLoading: action.isLoading,
      }


    default:
      return state;
  }
}