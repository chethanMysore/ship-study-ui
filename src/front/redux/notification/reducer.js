import {
  DISPLAY_ERROR_PAGE,
  CLEAR_ERROR_MESSAGES,
  CREATE_NEW_NOTIFICATION,
} from '../../constants/actionTypes';
import { ErrorCodes } from '../../constants/defaultValues';
const INIT_STATE = {
  message: null,
  errorType: null,
  source: null,
  isError: false,
  messageType: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DISPLAY_ERROR_PAGE: {
      console.log(
        'error: message - ' +
          action.payload.message +
          '; source - ' +
          action.payload.source,
      );
      return {
        ...state,
        errorType: ErrorCodes.NOT_FOUND,
        message: action.payload.message,
        source: action.payload.source,
        isError: true,
      };
    }
    case CLEAR_ERROR_MESSAGES: {
      return {
        ...state,
        errorType: null,
        message: '',
        source: null,
        isError: false,
      };
    }
    case CREATE_NEW_NOTIFICATION: {
      return {
        ...state,
        message: action.payload.message,
        source: action.payload.source,
        messageType: action.payload.messageType,
      };
    }
    default:
      return { ...state };
  }
};
