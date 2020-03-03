import {
  WRITE_ERROR_MESSAGE,
  CLEAR_ERRORS,
  CREATE_NEW_NOTIFICATION,
} from '../../constants/actionTypes';

export const writeErrorMessage = (message, source) => {
  return {
    type: WRITE_ERROR_MESSAGE,
    payload: { message, source },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const createNotification = payload => {
  return {
    type: CREATE_NEW_NOTIFICATION,
    payload,
  };
};
