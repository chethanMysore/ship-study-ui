import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import {
  WRITE_ERROR_MESSAGE,
  DISPLAY_ERROR_PAGE,
  CLEAR_ERRORS,
  CLEAR_ERROR_MESSAGES
} from "../../constants/actionTypes";

/**
 * Middleware to perform display of messages
 * @param {*} payload
 * @sideEffects 1. dispatch display message
 */
const writeErrorMessage = function*(payload) {
  yield put({
    type: DISPLAY_ERROR_PAGE,
    payload: payload
  });
};

/**
 * Middleware to perform clearing of error messages
 * @param {*} payload
 * @sideEffects 1. dispatch clear error message
 */
const clearErrorMessages = function*(payload) {
  yield [
    put({
      type: CLEAR_ERROR_MESSAGES
    })
  ];
};

/**
 * Encapsulates sagas to handle side effects on actions pertaining to notifications
 * @param {*} action
 */
export const notificationSagas = function*(action) {
  yield takeEvery(WRITE_ERROR_MESSAGE, action =>
    writeErrorMessage(action.payload)
  );
  yield takeEvery(CLEAR_ERRORS, action => clearErrorMessages(action.payload));
};
