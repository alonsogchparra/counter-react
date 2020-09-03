import * as actionTypes from '../actions/actionTypes';

const initState = {
  counter: 0,
}

export default (state = initState, action) => {

  switch (action.type) {

    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }

    default:
      return state;
  }

}