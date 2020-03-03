import { all } from 'redux-saga/effects';
import { apiSagas } from './api/saga';
import { notificationSagas } from './notification/saga';

export default function* rootSaga(getState) {
  yield all([apiSagas(), notificationSagas()]);
}
