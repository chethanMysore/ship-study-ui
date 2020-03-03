import { combineReducers } from 'redux';
import settings from './settings/reducer';
import api from './api/reducer';
import notification from './notification/reducer';

const reducers = combineReducers({
  settings,
  api,
  notification,
});

export default reducers;
