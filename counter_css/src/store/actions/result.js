import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    value: result,
    isLoading: false
  };
};

export const deleteResult = resId => {
  return {
    type: actionTypes.DELETE_RESULT,
    result_id: resId
  };
};

export const loadResult = () => {
  return {
    type: actionTypes.LOAD_RESULT,
    isLoading: true
  }
}

export const storeResult = result => {
  return dispatch => {

    setTimeout(() => {
      dispatch(loadResult());
      setTimeout(() => {
        dispatch(saveResult(result));
      }, 2000);
    }, 0);

  }
}