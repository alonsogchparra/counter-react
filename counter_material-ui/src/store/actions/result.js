import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
};

export const storeResult = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch (saveResult(result));
    }, 2000);
  }
};

export const deleteResult = (resId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    result_id: resId
  }
};