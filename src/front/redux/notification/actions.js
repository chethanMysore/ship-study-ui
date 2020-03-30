import {
  WRITE_ERROR_MESSAGE,
  CLEAR_ERRORS,
  CREATE_NEW_NOTIFICATION
} from "../../constants/actionTypes";

/**
 * Dispatches the action for writing error message on error boundary
 * @param {*} message
 * @param {*} source
 */
export const writeErrorMessage = (message, source) => {
  return {
    type: WRITE_ERROR_MESSAGE,
    payload: { message, source }
  };
};

/**
 * Clears errors written on error boundary
 */
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

/**
 * Creates new notifications to be displayed upon user actions
 * @param {*} payload
 */
export const createNotification = payload => {
  return {
    type: CREATE_NEW_NOTIFICATION,
    payload
  };
};
