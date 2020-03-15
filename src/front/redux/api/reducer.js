import {
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
  MODEL_PERFORMANCE
} from "../../constants/actionTypes";

/** ToDo: This is the static data. Remove after testing */

const INIT_STATE = {
  featureImportanceData: {},
  ExtraExtra: {},
  modelPerformance: {}
};

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
    default:
      return { ...state };
  }
};
