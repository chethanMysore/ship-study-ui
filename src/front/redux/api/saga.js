import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  WRITE_ERROR_MESSAGE,
  FETCH_FEATURE_IMPORTANCE,
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
  FETCH_FEATURE_ICE_COORDS,
  FETCH_MODEL_PERFORMANCE,
  MODEL_PERFORMANCE,
  FETCH_MINIMAL_PARTICIPANT_CHANGE,
  MINIMAL_PARTICIPANT_CHANGE
} from "../../constants/actionTypes";

import { fetchTableData, dispatchAction } from "./calls";

/**
 * Handle GET requests
 * @param {*} entityName
 * @param {*} payload
 * @sideEffects 1. dispatch error message if request fails,
 *              2. Updates corresponding entity in the store on success
 */
const getData = function*(entityName, loader, options) {
  try {
    let data = [];
    data = yield call(() => fetchTableData(entityName, options));
    if (data.isError) {
      throw data;
    } else {
      yield all([put({ type: entityName, data }), put({ type: loader })]);
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: "getData" }
    });
  }
};

/**
 * Midleware to perform http - post requests
 * @param {*} entityName
 * @param {*} payload
 * @sideEffects 1. dispatch error message if request fails
 *              2. Creates a notification to the user on success
 */
const dispatchPostRequest = function*(entityName, payload) {
  try {
    const res = yield call(dispatchAction, entityName, payload.requestData);
    if (res.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: { message: "Action Failed", source: "dispatchPostRequest" }
      });
    } else {
      yield all([
        put({
          type: entityName,
          data: res
        }),
        put({ type: payload.loader })
      ]);
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: "dispatchPostRequest" }
    });
  }
};

/**
 * Encapsulates sagas to handle side effects on actions pertaining to model results
 * @param {*} action
 */
export const apiSagas = function*(action) {
  yield takeLatest(FETCH_FEATURE_IMPORTANCE, action =>
    getData(FEATURE_IMPORTANCE_DATA, action.payload, null)
  );
  yield takeLatest(FETCH_FEATURE_ICE_COORDS, action =>
    dispatchPostRequest(FEATURE_ICE_COORDS, action.payload)
  );
  yield takeLatest(FETCH_MODEL_PERFORMANCE, action =>
    getData(MODEL_PERFORMANCE, action.payload, null)
  );
  yield takeLatest(FETCH_MINIMAL_PARTICIPANT_CHANGE, action =>
    dispatchPostRequest(MINIMAL_PARTICIPANT_CHANGE, action.payload)
  );
};
