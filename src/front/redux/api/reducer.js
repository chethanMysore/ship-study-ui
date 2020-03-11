import {
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
} from '../../constants/actionTypes';

/** ToDo: This is the static data. Remove after testing */

const INIT_STATE = {
  featureImportanceData: [],
  featureIceCoords: [],
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case FEATURE_IMPORTANCE_DATA: {
      return Object.assign({}, state, { featureImportanceData: data.response });
    }
    case FEATURE_ICE_COORDS: {
      return Object.assign({}, state, { featureIceCoords: data.response });
    }
    default:
      return { ...state };
  }
};
