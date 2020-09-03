import * as actionTypes from './actionTypes';

const saveResult = (value) => ({
  type: actionTypes.STORE_RESULT,
  value,
  isLoading: false,
});

export const deleteResult = (resId) => ({
  type: actionTypes.DELETE_RESULT,
  resId,
});

export const loadingResult = () => ({
  type: actionTypes.LOADING_RESULT,
  isLoading: true
})

export const storeResult = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loadingResult());
      setTimeout(() => {
        dispatch(saveResult(value));
      }, 2000)
    },0);
  }
}