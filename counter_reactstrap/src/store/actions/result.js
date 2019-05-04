import * as actionTypes from './actionTypes';

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
    loading: false,
    progressBar: 0
  }
};

export const deleteResult = resId => {
  return {
    type: actionTypes.DELETE_RESULT,
    result_id: resId
  }
};

export const loadingResult = () => {
  return {
    type: actionTypes.LOADING_RESULT,
    loading: true
  }
}

export const updateProgressBar = progressBar => {
  return {
    type: actionTypes.UPDATE_PROGRESS_BAR,
    progressBar
  }
}

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch (loadingResult());
      setTimeout(() => {
        dispatch (saveResult(result));
      }, 2000)
    }, 0);
  }
}