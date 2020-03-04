import { FEATURE_IMPORTANCE_DATA } from '../../constants/actionTypes';

/** ToDo: This is the static data. Remove after testing */

const INIT_STATE = {
  featureImportanceData: [], // set to featureImportanceData.data for static data, // Store for Locations (contains both bussiness locations and readpoints distinguished by 'readpoint' boolean attribute)
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case FEATURE_IMPORTANCE_DATA: {
      return Object.assign({}, state, { featureImportanceData: data.response });
    }
    default:
      return { ...state };
  }
};
