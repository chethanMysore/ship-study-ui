import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  WRITE_ERROR_MESSAGE,
  DISPLAY_ERROR_PAGE,
  CLEAR_ERRORS,
  CLEAR_ERROR_MESSAGES,
} from '../../constants/actionTypes';

const writeErrorMessage = function*(payload) {
  yield put({
    type: DISPLAY_ERROR_PAGE,
    payload: payload,
  });
};

const clearErrorMessages = function*(payload) {
  yield [
    put({
      type: CLEAR_ERROR_MESSAGES,
    }),
  ];
};

export const notificationSagas = function*(action) {
  yield takeEvery(WRITE_ERROR_MESSAGE, action =>
    writeErrorMessage(action.payload),
  );
  yield takeEvery(CLEAR_ERRORS, action => clearErrorMessages(action.payload));
};
