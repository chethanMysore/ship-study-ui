import {
  DISPLAY_ERROR_PAGE,
  CLEAR_ERROR_MESSAGES,
  CREATE_NEW_NOTIFICATION
} from "../../constants/actionTypes";
import { ErrorCodes } from "../../constants/defaultValues";

/**
 * This is the state container for various notification related states
 */
const INIT_STATE = {
  message: null, // stores message to be displayed on the screen
  errorType: null, // stores error type
  source: null, // stores function name where the error occurred
  isError: false, // true for error messages and false for info messages
  messageType: null // type of message being displayed. one of: success, error, warning, info
};

/**
 * This is the state reducer for updating the respective states on corresponding actions
 */
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DISPLAY_ERROR_PAGE: {
      console.log(
        "error: message - " +
          action.payload.message +
          "; source - " +
          action.payload.source
      );
      return {
        ...state,
        errorType: ErrorCodes.NOT_FOUND,
        message: action.payload.message,
        source: action.payload.source,
        isError: true
      };
    }
    case CLEAR_ERROR_MESSAGES: {
      return {
        ...state,
        errorType: null,
        message: "",
        source: null,
        isError: false
      };
    }
    case CREATE_NEW_NOTIFICATION: {
      return {
        ...state,
        message: action.payload.message,
        source: action.payload.source,
        messageType: action.payload.messageType
      };
    }
    default:
      return { ...state };
  }
};
