import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  CREATE_NEW_NOTIFICATION,
  WRITE_ERROR_MESSAGE,
  FETCH_FEATURE_IMPORTANCE,
  FEATURE_IMPORTANCE_DATA,
} from '../../constants/actionTypes';

import { fetchTableData, dispatchAction, createNewDataInstance } from './calls';

/**
 * Handle GET requests
 * @param {*} entityName
 * @param {*} payload
 * @sideEffects 1. dispatch error message if request fails,
 *              2. Updates corresponding entity in the store on success
 */
const getData = function*(entityName, payload) {
  try {
    let data = [];
    data = yield call(() => fetchTableData(entityName, payload));
    if (data.isError) {
      throw data;
    } else {
      yield all([put({ type: entityName, data })]);
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: 'getData' },
    });
  }
};

/**
 *
 * @param {*} entityName
 * @param {*} payload
 * @sideEffects 1. dispatch error message if request fails
 *              2. Creates a notification to the user on success
 */
const addNewInstance = function*(entityName, payload) {
  try {
    const res = yield call(createNewDataInstance, entityName, payload);
    if (res.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: { message: 'Action Failed', source: 'addNewInstance' },
      });
    } else {
      yield put({
        type: CREATE_NEW_NOTIFICATION,
        payload: {
          message: 'Action Successful',
          messageType: 'success',
          source: 'addNewInstance',
        },
      });
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: 'addNewInstance' },
    });
  }
};

/**
 * Dispatches user actions like uploadImageFile
 * @param {*} entityName
 * @param {*} payload
 * @sideEffects 1. dispatch error message if request fails,
 *              2. Creates a notification to the user on success
 */
const uploadImageFile = function*(entityName, payload) {
  try {
    const data = yield call(dispatchAction, entityName, payload);
    if (data.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: { message: 'Action Failed', source: 'uploadImageFile' },
      });
    } else {
      yield all([
        put({
          type: DOWNLOAD_FILE,
          data: data.id,
        }),
        put({
          type: CREATE_NEW_NOTIFICATION,
          payload: {
            message: 'Action Successful',
            messageType: 'success',
            source: 'uploadImageFile',
          },
        }),
      ]);
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: 'uploadImageFile' },
    });
  }
};

/**
 * Encapsulates sagas to handle side effects on actions pertaining to Data Tables
 * @param {*} action
 */
export const apiSagas = function*(action) {
  yield takeLatest(FETCH_FEATURE_IMPORTANCE, action =>
    getData(FEATURE_IMPORTANCE_DATA, null),
  );
  // yield takeLatest(CREATE_NEW_LOCATION, action =>
  //   addNewInstance(LOCATION_DATA, action.payload),
  // );
};
