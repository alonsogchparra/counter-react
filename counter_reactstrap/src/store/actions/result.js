import * as actionTypes from './actionTypes';

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
};

export const deleteResult = resId => {
  return {
    type: actionTypes.DELETE_RESULT,
    result_id: resId
  }
};

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch (saveResult(result));
    }, 2000);
  }
}