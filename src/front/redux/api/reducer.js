import {
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
  MODEL_PERFORMANCE,
  MINIMAL_PARTICIPANT_CHANGE
} from "../../constants/actionTypes";

/**
 * This is the state container for all api related states used across the application
 */
const INIT_STATE = {
  featureImportanceData: {}, // stores feature importance data returned from api
  modelPerformance: {}, // stores model performance results
  minimalChange: {}, // stores minimal change of participant returned from api
  featureIceCoords: {} // stores ice and pdp co-ordinates returned from api
};

/**
 * This is the state reducer for updating the respective states on corresponding actions
 */
export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case FEATURE_IMPORTANCE_DATA: {
      return Object.assign({}, state, { featureImportanceData: data.response });
    }
    case FEATURE_ICE_COORDS: {
      return Object.assign({}, state, { featureIceCoords: data.response });
    }
    case MODEL_PERFORMANCE: {
      return Object.assign({}, state, { modelPerformance: data.response });
    }
    case MINIMAL_PARTICIPANT_CHANGE: {
      return Object.assign({}, state, { minimalChange: data.response });
    }
    default:
      return { ...state };
  }
};
